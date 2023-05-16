import React, { FC, useEffect, useState } from "react";
import { UserProvider } from "./UserContext";
import { UserInterface, defaultUserContext } from "./UserInterface";
import { User } from "../shared/types/User";
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  loadUsersService,
  updateUserService,
} from "./UserService";

interface UserContextContainerProps {
  children: React.ReactNode;
}

const UserContainer: FC<UserContextContainerProps> = ({ children }) => {
  const [state, setState] = useState<UserInterface>(defaultUserContext);

  async function loadAllUsers() {
    const users = await loadUsersService();
    setState((prev) => ({
      ...prev,
      users,
    }));
  }

  useEffect(() => {
    loadAllUsers();
  }, []);

  const createUser = async (newUser: User) => {
    const user = await createUserService(newUser);
    setState((prev) => ({
      ...prev,
      users: [...prev.users, user],
    }));
  };

  const deleteUser = async (id: string) => {
    await deleteUserService(id);
    const filteredUsers = state.users.filter((user) => user.id !== id);
    setState((prev) => ({
      ...prev,
      users: [...filteredUsers],
    }));
  };

  const getUserById = async (id: string) => {
    const user = await getUserByIdService(id);
    return user;
  };

  const updateUser = async (updatedUser: User) => {
    const user = await updateUserService(updatedUser);
    const updatedUserList = state.users;
    const updatedUserIndex = updatedUserList.findIndex((u) => u.id === user.id);
    updatedUserList[updatedUserIndex] = user;
    setState((prev) => ({
      ...prev,
      users: [...updatedUserList],
    }));
  };

  return (
    <UserProvider
      value={{
        ...state,
        createUser,
        deleteUser,
        getUserById,
        updateUser,
      }}
    >
      {children}
    </UserProvider>
  );
};

export default UserContainer;

import React, { FC, useEffect, useState } from "react";
import { UserProvider } from "./UserContext";
import { UserInterface, defaultUserContext } from "./UserInterface";
import { User } from "../shared/types/User";
import {
  createUserService,
  deleteUserService,
  loadUsersService,
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

  return (
    <UserProvider
      value={{
        ...state,
        createUser,
        deleteUser,
      }}
    >
      {children}
    </UserProvider>
  );
};

export default UserContainer;

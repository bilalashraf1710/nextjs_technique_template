import UserService from "@/services/UserService";
import { User as UserType } from "@/src/shared/types/User";

export const getUsers = async () => {
  const users = await UserService.fetchUsers();
  return users;
};

export const getUserById = async (id: string) => {
  const user = await UserService.fetchUserById(id);
  return user;
};

export const addUser = async (newUser: UserType) => {
  const user = await UserService.createUser(newUser);
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await UserService.deleteUser(id);
  return user;
};

export const updateUser = async (updatedUser: UserType) => {
  const user = await UserService.updateUser(updatedUser);
  return user;
};

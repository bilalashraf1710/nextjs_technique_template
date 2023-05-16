import { User } from "../shared/types/User";

export interface UserInterface {
  users: Array<User>;
  createUser: (newUser: User) => void;
  updateUser: (newUser: User) => void;
  deleteUser: (id: string) => void;
}

export const defaultUserContext: UserInterface = {
  users: [],
  createUser: (newUser: User) => {},
  updateUser: (updatedUser: User) => {},
  deleteUser: (id: string) => {},
};

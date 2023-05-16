import { User } from "../shared/types/User";

export interface UserInterface {
  users: Array<User>;
  createUser: (newUser: User) => Promise<void>;
  updateUser: (newUser: User) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  getUserById: (id: string) => Promise<User>;
}

export const defaultUserContext: UserInterface = {
  users: [],
  createUser: async (newUser: User) => {},
  updateUser: async (updatedUser: User) => {},
  deleteUser: async (id: string) => {},
  getUserById: async (id: string) => {
    return {} as User;
  },
};

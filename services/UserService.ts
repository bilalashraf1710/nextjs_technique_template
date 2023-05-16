import { User as UserType } from "@/src/shared/types/User";
import HttpClient from "./HttpClient";

enum UserEndpoints {
  FETCH_USERS = "/users",
  FETCH_USER = "/users/:id",
  CREATE_USER = "/users",
  UPDATE_USER = "/users/:id",
  DELETE_USER = "/users/:id",
}

class UserService extends HttpClient {
  static async fetchUsers() {
    const users = await this.get(UserEndpoints.FETCH_USERS);
    return users;
  }

  static async fetchUserById(id: string) {
    const userByIdPath = UserEndpoints.FETCH_USER.replace(":id", id);
    const user = await this.get(userByIdPath);
    return user;
  }

  static async createUser(newUser: UserType) {
    const user = await this.post(UserEndpoints.CREATE_USER, {
      ...newUser,
    });
    return user;
  }

  static async deleteUser(id: string) {
    const delUserByIdPath = UserEndpoints.DELETE_USER.replace(":id", id);
    const user = await this.delete(delUserByIdPath);
    return user;
  }

  static async updateUser(updatedUser: UserType) {
    const updateUserByIdPath = UserEndpoints.UPDATE_USER.replace(
      ":id",
      updatedUser.id
    );
    const user = await this.patch(updateUserByIdPath, {
      ...updatedUser,
    });
    return user;
  }
}

export default UserService;

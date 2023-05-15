import { extractValuesForKeyFormObjectArray } from "@/shared/helpers";
import HttpClient from "./HttpClient";

enum UserEndpoints {
  FETCH_USERS = "/users",
  FETCH_USER = "/users/:id",
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

  static async fetchAllUserIds() {
    const users = await this.get(UserEndpoints.FETCH_USERS);
    return extractValuesForKeyFormObjectArray(users, "id");
  }
}

export default UserService;

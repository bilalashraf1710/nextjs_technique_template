import { ApiRoutes } from "../api/constants/ApiRoutes";
import { HttpRequestMethods } from "../shared/constants";
import { User } from "../shared/types/User";

export const loadUsersService = async () => {
  const loadUserRequest = await fetch(ApiRoutes.USERS, {
    method: HttpRequestMethods.GET,
  });
  const { users } = await loadUserRequest.json();
  return users as Array<User>;
};

export const deleteUserService = async (id: string) => {
  await fetch(ApiRoutes.USER.replace(":id", id), {
    method: HttpRequestMethods.DELETE,
  });
};

export const createUserService = async (newUser: User) => {
  const userCreateRequest = await fetch(
    ApiRoutes.USER.replace(":id", newUser.id),
    {
      method: HttpRequestMethods.POST,
      body: JSON.stringify(newUser),
    }
  );
  const { user } = await userCreateRequest.json();
  return user as User;
};

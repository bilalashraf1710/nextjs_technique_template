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

export const createUserService = async (user: User) => {
  const userCreateRequest = await fetch(
    ApiRoutes.USER.replace(":id", user.id),
    {
      method: HttpRequestMethods.POST,
      body: JSON.stringify(user),
    }
  );
  const { user: newUser } = await userCreateRequest.json();
  return newUser as User;
};

export const updateUserService = async (user: User) => {
  const userUpdateRequest = await fetch(
    ApiRoutes.USER.replace(":id", user.id),
    {
      method: HttpRequestMethods.PATCH,
      body: JSON.stringify(user),
    }
  );
  const { user: updatedUser } = await userUpdateRequest.json();
  return updatedUser as User;
};

export const getUserByIdService = async (id: string) => {
  const userUpdateRequest = await fetch(ApiRoutes.USER.replace(":id", id), {
    method: HttpRequestMethods.GET,
  });
  const { user } = await userUpdateRequest.json();
  return user as User;
};

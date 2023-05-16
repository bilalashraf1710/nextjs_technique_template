import UserService from "@/services/UserService";
import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from "@/src/api/constants/response";
import {
  addUser,
  deleteUser,
  getUserById,
  updateUser,
} from "@/src/api/controller/users";
import { HttpRequestMethods } from "@/src/shared/constants";
import { User } from "@/src/shared/types/User";
import { NextApiRequest, NextApiResponse } from "next";

const handleRequestMethod = async (
  requestMethod: string,
  id: string,
  user: User | null
) => {
  switch (requestMethod) {
    case HttpRequestMethods.GET:
      return await getUserById(id);
    case HttpRequestMethods.POST:
      return await addUser(user as User);
    case HttpRequestMethods.DELETE:
      return await deleteUser(id);
    case HttpRequestMethods.PATCH:
      return await updateUser(user as User);
    default:
      throw Error("");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body = null, query } = req;
  const id = query?.id?.toString() ?? "";
  const receivedUserObj = body ? JSON.parse(body) : {};
  try {
    const user = await handleRequestMethod(
      method ?? "",
      id,
      receivedUserObj as User
    );
    res.status(SUCCESS_RESPONSE.status).json({
      message: SUCCESS_RESPONSE.message,
      user,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR_RESPONSE.status).json({
      message: INTERNAL_SERVER_ERROR_RESPONSE.message,
      user: null,
    });
  }
}

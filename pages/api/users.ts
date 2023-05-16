import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from "@/src/api/constants/response";
import { getUsers } from "@/src/api/controller/users";
import { HttpRequestMethods } from "@/src/shared/constants";
import { User } from "@/src/shared/types/User";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  try {
    if (method !== HttpRequestMethods.GET) {
      throw new Error("");
    }
    const users = await getUsers();
    res.status(SUCCESS_RESPONSE.status).json({
      message: SUCCESS_RESPONSE.message,
      users,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR_RESPONSE.status).json({
      message: INTERNAL_SERVER_ERROR_RESPONSE.message,
      users: [] as Array<User>,
    });
  }
}

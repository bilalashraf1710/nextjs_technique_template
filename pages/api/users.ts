import UserService from "@/services/UserService";
import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from "@/shared/api/helpers/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const users = await UserService.fetchUsers();

      res.status(SUCCESS_RESPONSE.status).json({
        message: SUCCESS_RESPONSE.message,
        users,
      });
    } catch (err) {
      res.status(INTERNAL_SERVER_ERROR_RESPONSE.status).json({
        message: "INTERNAL_SERVER_ERROR_RESPONSE.message",
        users: [],
      });
    }
  }
}

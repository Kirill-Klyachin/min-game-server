import { Request, Response } from "express";
import { getUserByLogin, updatePlayerById } from "../../utils";

type LogoutRequest = {
  id: string;
};

export const logout = async (
  request: Request<never, never, never, LogoutRequest>,
  response: Response
) => {
  try {
    const { id } = request.query;
    await updatePlayerById(id, "isOnline", 0);

    response.status(200).send({ message: "okay" });
  } catch (e) {
    const error = e as Error;
    response.status(400).send({ error: error?.message });
  }
};

import { Request, Response } from "express";
import { getUserByLogin, updatePlayerById } from "../../utils"; //"src/utils";
import { connectionUsersDB } from "../../db";
import { User } from "../../types";

type LoginRequest = {
  login: string;
  password: string;
};

export const login = async (
  request: Request<never, never, LoginRequest>,
  response: Response
) => {
  try {
    const { login, password } = request.body;

    const user = await getUserByLogin(login);

    if (!user) throw new Error("Неверный пароль или логин");

    const { password: userPassword, id } = user;
    const isSuccess = password === userPassword;

    if (!isSuccess) throw new Error("Неверный пароль или логин");
    await updatePlayerById(id, "isOnline", 1);

    response.status(200).send({ id });
  } catch (e) {
    const error = e as Error;
    response.status(400).send({ error: error?.message });
  }
};

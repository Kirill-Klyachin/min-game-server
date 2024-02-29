import { Request, Response } from "express";
import { getPlayerById } from "../../utils"; //"src/utils";

type GetPlayerQuery = {
  //TODO:  убрать когда появится нормальная авторизация
  id: string;
};

export const getPlayer = async (
  request: Request<never, never, never, GetPlayerQuery>,
  response: Response
) => {
  try {
    const { id } = request.query;
    const player = await getPlayerById(id);
    const { isOnline, x, y } = player;
    const responseObj = {
      id,
      isOnline,
      coordinates: [x, y],
    };

    response.status(200).send(responseObj);
  } catch (e) {
    console.error(e);
  }
};

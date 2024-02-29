import { Request, Response } from "express";
import { getOtherOnlinePlayersById } from "../../utils";

type GetOtherPlayers = {
  //TODO:  убрать когда появится нормальная авторизация
  id: string;
};

export const getOtherPlayers = async (
  request: Request<never, never, never, GetOtherPlayers>,
  response: Response
) => {
  try {
    const { id } = request.query;
    const players = await getOtherOnlinePlayersById(id);

    response.status(200).send({ players });
  } catch (e) {
    console.error(e);
  }
};

import { Request, Response } from "express";
import { getPlayerById, updatePlayerById } from "../../utils"; //"src/utils";
import { PLAYER_ACTION, STEP } from "../../constants/player";

type GetPlayerRequest = {
  //TODO:  убрать когда появится нормальная авторизация
  action: PLAYER_ACTION;
};

type GetPlayerQuery = {
  //TODO:  убрать когда появится нормальная авторизация
  id: string;
};

export const makeStep = async (
  request: Request<never, never, GetPlayerRequest, GetPlayerQuery>,
  response: Response
) => {
  try {
    const { action } = request.body;
    const { id } = request.query;
    const user = await getPlayerById(id);
    const coordinates = [user.x, user.y];
    let newCoordinates: number[] = [];

    if (action === PLAYER_ACTION.stepForward) {
      const [coordinatesX, coordinatesY] = coordinates;
      const newY = coordinatesY - STEP;
      newCoordinates = [coordinatesX, newY];
    } else if (action === PLAYER_ACTION.stepBack) {
      const [coordinatesX, coordinatesY] = coordinates;
      //TODO: потому будет -
      const newY = coordinatesY + STEP;
      newCoordinates = [coordinatesX, newY];
    } else if (action === PLAYER_ACTION.stepRight) {
      const [coordinatesX, coordinatesY] = coordinates;
      const newX = coordinatesX + STEP;
      newCoordinates = [newX, coordinatesY];
    } else if (action === PLAYER_ACTION.stepLeft) {
      const [coordinatesX, coordinatesY] = coordinates;
      const newX = coordinatesX - STEP;
      newCoordinates = [newX, coordinatesY];
    }

    updatePlayerById(id, "x", newCoordinates[0]);
    updatePlayerById(id, "y", newCoordinates[1]);

    response.status(200).send({ coordinates: newCoordinates });
  } catch (e) {
    console.error(e);
  }
};

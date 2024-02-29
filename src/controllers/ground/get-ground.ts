import { Request, Response } from "express";
import { readFile } from "../../utils"; //"src/utils";

export const getGround = async (request: Request, response: Response) => {
  try {
    const json = await readFile("src/constants/TEST_GROUNG.json", "utf8");
    const ground = JSON.parse(json);

    const dataResponse = { ground: ground.data };

    response.status(200).send(dataResponse);
  } catch (e) {
    console.error(e);
  }
};

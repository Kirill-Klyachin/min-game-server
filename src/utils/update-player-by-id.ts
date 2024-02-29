import { connectionUsersDB } from "../db";
import { Player } from "../types";

export const updatePlayerById = async (
  id: string | number,
  key: string,
  newValue: any
) => {
  return new Promise<void>((resolve, reject) => {
    connectionUsersDB.query(
      `UPDATE PlayerData SET ${key} = ${newValue} WHERE id = '${id}'`,
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

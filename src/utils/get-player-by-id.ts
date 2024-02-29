import { connectionUsersDB } from "../db";
import { Player } from "../types";

export const getPlayerById = async (id: string) => {
  return new Promise<Player>((resolve, reject) => {
    connectionUsersDB.query(
      `SELECT * FROM PlayerData WHERE id = '${id}'`,
      (err, rows) => {
        if (err) reject(err);

        const player = rows[0];
        if (!player) reject(new Error("Player is not found"));

        resolve(player);
      }
    );
  });
};

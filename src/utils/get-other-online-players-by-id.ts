import { connectionUsersDB } from "../db";
import { Player } from "../types";

export const getOtherOnlinePlayersById = async (id: string) => {
  return new Promise<Player[]>((resolve, reject) => {
    connectionUsersDB.query(
      `SELECT * FROM PlayerData WHERE id NOT IN (${id}) AND isOnline = 1`,
      (err, rows) => {
        if (err) reject(err);

        const players = rows;
        resolve(players);
      }
    );
  });
};

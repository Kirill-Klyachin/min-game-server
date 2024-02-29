import { connectionUsersDB } from "../db";
import { User } from "../types";

export const getUserByLogin = async (login: string) => {
  return new Promise<User>((resolve, reject) => {
    connectionUsersDB.query(
      `SELECT * FROM UsersData WHERE login = '${login}'`,
      (err, rows) => {
        if (err) reject(err);

        const user = rows[0];
        if (!user) reject(new Error("user is not found"));

        resolve(rows[0]);
      }
    );
  });
};

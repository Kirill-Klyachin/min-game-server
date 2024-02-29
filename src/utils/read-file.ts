import { readFile as fsReadFile } from "fs";

type ReadFile = (path: string, data: BufferEncoding) => Promise<string>;

export const readFile: ReadFile = (path, data) => {
  return new Promise<string>((resolve, reject) =>
    fsReadFile(path, data, (err, usersRaw) => {
      if (err) reject(err);
      resolve(usersRaw);
    })
  );
};

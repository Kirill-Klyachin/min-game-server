import { writeFile as fsWriteFile } from "fs";

type WriteFile = (path: string, data: string) => Promise<void>;

export const writeFile: WriteFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fsWriteFile(path, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

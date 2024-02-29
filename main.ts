import express, { Application } from "express";
import dotenv from "dotenv";
import { Server } from "./src/server";
import { connectionUsersDB } from "./src/db";
//import "./src/ws";

dotenv.config();
const app: Application = express();

connectionUsersDB.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});
const server = new Server(app);
//startServer(app);
const PORT = Number(/* process.env.PORT */) || 4040;
const SERVER_DOMEN = process.env.SERVER_DOMEN ?? "localhost";

app
  .listen(PORT, SERVER_DOMEN, () => {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error("Error: address already in use");
    } else {
      console.error(err);
    }
  })
  .on("close", () => {
    console.log(`Server is stop.`);

    connectionUsersDB.end(() => {
      console.log("Подключение закрыто");
    });
  });

import { Application } from "express";
import {
  groundRoutes,
  loginRoutes,
  playerRoutes,
  otherPlayersRoutes,
} from "./routes";

/* export const routes = (app: Application) => {
  app.use("/api", groundRoutes);
  app.use("/api", loginRoutes);
}; */

export class Routes {
  constructor(app: Application) {
    app.use("/api", groundRoutes);
    app.use("/api", loginRoutes);
    app.use("/api", playerRoutes);
    app.use("/api", otherPlayersRoutes);
  }
}

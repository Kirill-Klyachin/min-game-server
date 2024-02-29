import { Router } from "express";
import { getOtherPlayers } from "../../controllers";

class OtherPlayersRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/other-players", getOtherPlayers);
  }
}

export const otherPlayersRoutes = new OtherPlayersRoutes().router;

import { Router } from "express";
import { getPlayer, makeStep } from "../../controllers";

class PlayerRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/player", getPlayer);
    this.router.patch("/player", makeStep);
  }
}

export const playerRoutes = new PlayerRoutes().router;

import { Router } from "express";
import { getGround } from "../../controllers"; //"src/controllers/ground/get-ground";

/* export const groundRoutes = () => {
  const router = Router();
  router.get("/ground", getGround);

  return router;
}; */

//export const groundRoutes = new GroundRoutes().router;

class GroundRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/ground", getGround);
  }
}

export const groundRoutes = new GroundRoutes().router;

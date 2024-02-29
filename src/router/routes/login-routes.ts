import { Router } from "express";
import { login, logout } from "../../controllers";

class LoginRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/login", login);
    this.router.get("/logout", logout);
  }
}

export const loginRoutes = new LoginRoutes().router;

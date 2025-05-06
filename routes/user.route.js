import { Router } from "express";
import {
  getUsers,
  registerUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const RRouter = Router();
RRouter.route("/").get(getUsers);
RRouter.route("/register").get(registerUser);
RRouter.route("/delete").get(deleteUser);
export default RRouter;

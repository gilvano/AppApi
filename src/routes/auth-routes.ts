import { Router } from "express";
import AuthController from "../controllers/auth-controller";
import { checkJwt } from "../middlewares/checkJwt";

const authRouter = Router();
//Login route
authRouter.post("/login", AuthController.login);

//Change my password
authRouter.post("/change-password", [checkJwt], AuthController.changePassword);

export default authRouter;
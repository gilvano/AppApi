import { Router } from "express";
import LocalEntregaController from "../controllers/local-entrega-controller";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const localEntregaRouter = Router();

  localEntregaRouter.get(
    "/",  
    [checkJwt, checkRole(["ADMIN", "USER"])],
    LocalEntregaController.listAll
  );

  localEntregaRouter.get(
    "/:id([0-9]+)",
     [checkJwt, checkRole(["ADMIN", "USER"])],
    LocalEntregaController.getOneById
  );

  localEntregaRouter.post(
    "/", 
    [checkJwt, checkRole(["ADMIN", "USER"])],
    LocalEntregaController.newLocalEntrega
  );

  localEntregaRouter.patch(
    "/:id([0-9]+)",
     [checkJwt, checkRole(["ADMIN", "USER"])],    
    LocalEntregaController.editLocalEntrega
  );

  localEntregaRouter.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN", "USER"])],
    LocalEntregaController.deleteLocalEntrega
  );

  export default localEntregaRouter;
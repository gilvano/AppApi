import { Router } from 'express';
import authRouter from './auth-routes';
import localEntregaRouter from './local-entrega-routes';
import userRouter from './user-routes'


const routes = Router();

routes.use('/user', userRouter);
routes.use('/auth', authRouter);
routes.use('/localentrega', localEntregaRouter);

export default routes;
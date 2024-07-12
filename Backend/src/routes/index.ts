import { Router, Request, Response } from 'express';
import notasRouter from '../modules/notas/routes/Notas.routes';
const routes = Router();

routes.use('/notas', notasRouter);


export default routes;
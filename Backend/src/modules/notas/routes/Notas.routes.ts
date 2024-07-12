import { Router } from "express";
import { NotasController } from "../controllers/NotasController";

const notasRouter = Router();
const notasController = new NotasController();

notasRouter.post('/anos', notasController.anos);
notasRouter.post('/universidades', notasController.universidade);
notasRouter.post('/campus', notasController.campus);
notasRouter.post('/cursos', notasController.curso);
notasRouter.post('/graus', notasController.grau);
notasRouter.post('/turnos', notasController.turno);
notasRouter.post('/completo', notasController.completo);
// notasRouter.post('/create', notasController.create);

export default notasRouter;

import {Request, Response} from "express"
import Zod from 'zod';
import { AnosNotasService } from "../services/AnosNotasService";
import { CreateNotaService } from "../services/CreateNotasService";
import { UniversidadeNotasService } from "../services/UniversidadeNotasService";
import { CampusNotasService } from "../services/CampusNotasService";
import { CursoNotasService } from "../services/CursoNotasService";
import { GrauNotasService } from "../services/GrauNotasService";
import { TurnoNotasService } from "../services/TurnoNotasService";
import { CompletoNotasService } from "../services/CompletoNotasService";
export class NotasController {
    public async create(request: Request, response: Response) {
        const createNotaService = new CreateNotaService()
        console.log(request.body)
        const nota = await createNotaService.execute(request.body);
        return response.json(nota);
    }

    public async anos(request: Request, response: Response){
        const anosNotasService = new AnosNotasService()
        const anos = await anosNotasService.execute()
        response = response.status(200).json(anos);
    }
    public async universidade(request: Request, response: Response){
        const universidadeNotasService = new UniversidadeNotasService()
        const { anoSISU } = request.body
        const universidades = await universidadeNotasService.execute(anoSISU)
        response = response.status(200).json(universidades);
    }
    public async campus(request: Request, response: Response) {
        const campusNotasService = new CampusNotasService()
        const { anoSISU, universidade} = request.body
        const campus = await campusNotasService.execute(anoSISU, universidade)
        response = response.status(200).json(campus);
    }
    public async curso(request:Request, response: Response){
        const cursoNotasService = new CursoNotasService()
        const { anoSISU, universidade, campus} = request.body
        const cursos = await cursoNotasService.execute(anoSISU, universidade, campus)
        response = response.status(200).json(cursos);
    }
    public async grau(request: Request, response: Response){
        const cursoNotasService = new GrauNotasService()
        const { anoSISU, universidade, campus, nome_curso} = request.body
        const graus = await cursoNotasService.execute(anoSISU, universidade, campus, nome_curso)
        response = response.status(200).json(graus);
    }
    public async turno(request: Request, response: Response){
        const turnoNotasService = new TurnoNotasService()
        const { anoSISU, universidade, campus, nome_curso, grau} = request.body
        const turnos = await turnoNotasService.execute(anoSISU, universidade, campus, nome_curso, grau)
        response = response.status(200).json(turnos);
    }
    public async completo(request: Request, response: Response){
        const completoNotasService = new CompletoNotasService()
        const { anoSISU, universidade, campus, nome_curso, grau, turno} = request.body
        const turnos = await completoNotasService.execute(anoSISU, universidade, campus, nome_curso, grau, turno)
        response = response.status(200).json(turnos);
    }
}
import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class CursoNotasService {
    public async execute(anoSISU: string, universidade: string, campus: string) {
        try {
            const cursos = await prismaC.$queryRaw`
            SELECT DISTINCT "Nome_Curso"
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
                AND "Universidade" = ${universidade}
                AND "Campus" = ${campus}
            GROUP BY "Nome_Curso"
            `;
            return cursos;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
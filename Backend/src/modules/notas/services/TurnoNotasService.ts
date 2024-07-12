import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class TurnoNotasService {
    public async execute(anoSISU: string, universidade: string, campus: string,
        nome_Curso: string, grau: string) {
        try {
            const turnos = await prismaC.$queryRaw`
            SELECT DISTINCT "Turno"
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
                AND "Universidade" = ${universidade}
                AND "Campus" = ${campus}
                AND "Nome_Curso" = ${nome_Curso}
                AND "Grau" = ${grau}
            GROUP BY "Turno"
            `;
            return turnos;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
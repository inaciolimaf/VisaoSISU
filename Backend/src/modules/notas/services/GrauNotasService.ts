import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class GrauNotasService {
    public async execute(anoSISU: string, universidade: string, campus: string,
        nome_Curso: string) {
        try {
            const graus = await prismaC.$queryRaw`
            SELECT DISTINCT "Grau"
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
                AND "Universidade" = ${universidade}
                AND "Campus" = ${campus}
                AND "Nome_Curso" = ${nome_Curso}
            GROUP BY "Grau"
            `;
            return graus;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
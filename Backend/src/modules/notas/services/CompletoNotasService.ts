import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class CompletoNotasService {
    public async execute(anoSISU: string, universidade: string, campus: string,
        nome_Curso: string, grau: string, turno: string) {
        try {
            const notas = await prismaC.$queryRaw`
            SELECT *
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
                AND "Universidade" = ${universidade}
                AND "Campus" = ${campus}
                AND "Nome_Curso" = ${nome_Curso}
                AND "Grau" = ${grau}
                AND "Turno" = ${turno}
            `;
            return notas;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
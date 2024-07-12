import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class UniversidadeNotasService {
    public async execute(anoSISU: string) {
        try {
            const universidades = await prismaC.$queryRaw`
            SELECT DISTINCT "Universidade"
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
            GROUP BY "Universidade"
            `;
            return universidades;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
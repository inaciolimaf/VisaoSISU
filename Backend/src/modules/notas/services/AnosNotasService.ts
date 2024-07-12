import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class AnosNotasService {
    public async execute() {
        try {
            const anos = await prismaC.$queryRaw`
            SELECT DISTINCT "AnoSISU"
            FROM "notaCorte"
            GROUP BY "AnoSISU"
          `;
            return anos;
        } catch (err) {
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
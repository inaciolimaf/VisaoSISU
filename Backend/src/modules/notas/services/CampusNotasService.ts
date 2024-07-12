import { AppError } from "../../../middlewares/errors/AppError";
import { prismaC } from "../../../utils/prisma";


export class CampusNotasService {
    public async execute(anoSISU: string, universidade: string) {
        try {
            const campus = await prismaC.$queryRaw`
            SELECT DISTINCT "Campus"
            FROM "notaCorte"
            WHERE "AnoSISU" = ${anoSISU}
                AND "Universidade" = ${universidade}
            GROUP BY "Campus"
            `;
            return campus;
        } catch (err) {
            console.log(err)
            throw new AppError(`Erro ao tentar acessar o banco\n${err}`, 404);
        }
    }
}
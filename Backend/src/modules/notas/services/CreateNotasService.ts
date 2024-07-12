import { AppError } from '../../../middlewares/errors/AppError';
import { prismaC } from "../../../utils/prisma";
import { Nota } from '../dtos/NotaDTO';

export class CreateNotaService {
    public async execute(data: Nota) {
        try {
            const nota = await prismaC.notaCorte.create({
                data: data
            });
            return nota;
        } catch (err) {
          throw new AppError(`${err}`, 404);
        }
    }
}

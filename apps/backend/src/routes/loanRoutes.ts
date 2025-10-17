// apps/backend/src/routes/loanRoutes.ts
import type { FastifyInstance } from 'fastify';
import { SequelizeLoanRepository } from '../repositories/SequelizeLoanRepository';
import { ReturnBook } from '../../../../domain/src/use-cases/return-book/ReturnBook';

export async function loanRoutes(fastify: FastifyInstance) {
  const loanRepo = new SequelizeLoanRepository();

  fastify.post('/return', async (request, reply) => {
    const { loanId } = request.body as { loanId: string };

    try {
      const returnBook = new ReturnBook(loanRepo);
      await returnBook.execute({ loanId });
      reply.code(200).send({ message: 'Book returned successfully' });
    } catch (err: any) {
      reply.code(400).send({ error: err.message });
    }
  });
}

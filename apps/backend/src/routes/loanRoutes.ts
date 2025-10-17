// // apps/backend/src/routes/loanRoutes.ts
// impoSequelizeLoanRepositoryrt type { FastifyInstance } from 'fastify';
// import {  } from '../repositories/SequelizeLoanRepository';
// import { ReturnBook } from '../../../../domain/src/use-cases/return-book/ReturnBook';

// export async function loanRoutes(fastify: FastifyInstance) {
//   const loanRepo = new SequelizeLoanRepository();

//   fastify.post('/return', async (request, reply) => {
//     const { loanId } = request.body as { loanId: string };

//     try {
//       const returnBook = new ReturnBook(loanRepo);
//       await returnBook.execute({ loanId });
//       reply.code(200).send({ message: 'Book returned successfully' });
//     } catch (err: any) {
//       reply.code(400).send({ error: err.message });
//     }
//   });
// }





// apps/backend/src/routes/loanRoutes.ts
import type { FastifyInstance } from 'fastify';
import { SequelizeLoanRepository } from '../repositories/SequelizeLoanRepository';
import { SequelizeUserRepository } from '../repositories/SequelizeUserRepository';
import { SequelizeBookRepository } from '../repositories/SequelizeBookRepository';

import { LoanBook } from '../../../../domain/src/use-cases/loan-book/LoanBook';
import { ReturnBook } from '../../../../domain/src/use-cases/return-book/ReturnBook';

export async function loanRoutes(app: FastifyInstance) {
  const loanRepo = new SequelizeLoanRepository();
  const userRepo = new SequelizeUserRepository();
  const bookRepo = new SequelizeBookRepository();

  app.post('/loans', async (request, reply) => {
    const { userId, bookId } = request.body as { userId: string; bookId: string };
    try {
      const loanBook = new LoanBook(userRepo, bookRepo, loanRepo);
      const loan = await loanBook.execute({ userId, bookId });
      reply.code(201).send(loan);
    } catch (err: any) {
      reply.code(400).send({ error: err.message });
    }
  });

  app.post('/return', async (request, reply) => {
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

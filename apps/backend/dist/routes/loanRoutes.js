// apps/backend/src/routes/loanRoutes.ts
import { SequelizeLoanRepository } from '../repositories/SequelizeLoanRepository';
import { SequelizeUserRepository } from '../repositories/SequelizeUserRepository';
import { SequelizeBookRepository } from '../repositories/SequelizeBookRepository';
import { LoanBook } from '../../../../domain/src/use-cases/loan-book/LoanBook';
import { ReturnBook } from '../../../../domain/src/use-cases/return-book/ReturnBook';
export async function loanRoutes(app) {
    const loanRepo = new SequelizeLoanRepository();
    const userRepo = new SequelizeUserRepository();
    const bookRepo = new SequelizeBookRepository();
    app.post('/loans', async (request, reply) => {
        const { userId, bookId } = request.body;
        try {
            const loanBook = new LoanBook(userRepo, bookRepo, loanRepo);
            const loan = await loanBook.execute({ userId, bookId });
            reply.code(201).send(loan);
        }
        catch (err) {
            reply.code(400).send({ error: err.message });
        }
    });
    app.post('/return', async (request, reply) => {
        const { loanId } = request.body;
        try {
            const returnBook = new ReturnBook(loanRepo);
            await returnBook.execute({ loanId });
            reply.code(200).send({ message: 'Book returned successfully' });
        }
        catch (err) {
            reply.code(400).send({ error: err.message });
        }
    });
    app.get('/loans', async (request, reply) => {
        try {
            const loans = await loanRepo.findAll();
            reply.code(200).send(loans);
        }
        catch (err) {
            reply.code(500).send({ error: err.message });
        }
    });
    app.get('/loans/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            const loan = await loanRepo.findById(id);
            if (!loan)
                return reply.code(404).send({ error: 'Loan not found' });
            reply.code(200).send(loan);
        }
        catch (err) {
            reply.code(500).send({ error: err.message });
        }
    });
    app.get('/loans/user/:userId', async (request, reply) => {
        const { userId } = request.params;
        try {
            const loans = await loanRepo.findByUserId(userId);
            reply.code(200).send(loans);
        }
        catch (err) {
            reply.code(500).send({ error: err.message });
        }
    });
    app.get('/loans/book/:bookId', async (request, reply) => {
        const { bookId } = request.params;
        try {
            const loans = await loanRepo.findByBookId(bookId);
            reply.code(200).send(loans);
        }
        catch (err) {
            reply.code(500).send({ error: err.message });
        }
    });
}
//# sourceMappingURL=loanRoutes.js.map
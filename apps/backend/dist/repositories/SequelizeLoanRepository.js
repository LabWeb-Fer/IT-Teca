//apps/backend/src/repositories/SequelizeBookRepositories.ts
import { Loan } from '../../../../domain/src/entities/Loan';
import {} from '../../../../domain/src/use-cases/loan-book/LoanRepository';
import { LoanModel } from '../models/LoanModel';
export class SequelizeLoanRepository {
    async findById(id) {
        const loanRecord = await LoanModel.findByPk(id);
        if (!loanRecord)
            return null;
        return new Loan(loanRecord.id, loanRecord.userId, loanRecord.bookId, loanRecord.loanDate, loanRecord.returnDate || undefined);
    }
    async save(loan) {
        await LoanModel.upsert({
            id: loan.id,
            userId: loan.userId,
            bookId: loan.bookId,
            loanDate: loan.loanDate,
            returnDate: loan.returnDate || null
        });
    }
    // Nuevo: obtener todos los préstamos
    async findAll() {
        const loanRecords = await LoanModel.findAll();
        return loanRecords.map((loanRecord) => new Loan(loanRecord.id, loanRecord.userId, loanRecord.bookId, loanRecord.loanDate, loanRecord.returnDate || undefined));
    }
    async findByUserId(userId) {
        const loanRecords = await LoanModel.findAll({ where: { userId } });
        return loanRecords.map((loanRecord) => new Loan(loanRecord.id, loanRecord.userId, loanRecord.bookId, loanRecord.loanDate, loanRecord.returnDate || undefined));
    }
    async findByBookId(bookId) {
        const loanRecords = await LoanModel.findAll({ where: { bookId } });
        return loanRecords.map((loanRecord) => new Loan(loanRecord.id, loanRecord.userId, loanRecord.bookId, loanRecord.loanDate, loanRecord.returnDate || undefined));
    }
}
//# sourceMappingURL=SequelizeLoanRepository.js.map
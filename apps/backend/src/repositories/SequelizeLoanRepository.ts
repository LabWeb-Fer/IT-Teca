
//apps/backend/src/repositories/SequelizeBookRepositories.ts

import { Loan } from '../../../../domain/src/entities/Loan';
import { type LoanRepository } from '../../../../domain/src/use-cases/loan-book/LoanRepository';
import { LoanModel } from '../models/LoanModel';

export class SequelizeLoanRepository implements LoanRepository {
  async findById(id: string): Promise<Loan | null> {
    const loanRecord = await LoanModel.findByPk(id);
    if (!loanRecord) return null;

    return new Loan(
      loanRecord.id,
      loanRecord.userId,
      loanRecord.bookId,
      loanRecord.loanDate,
      loanRecord.returnDate || undefined
    );
  }

  async save(loan: Loan): Promise<void> {
    await LoanModel.upsert({
      id: loan.id,
      userId: loan.userId,
      bookId: loan.bookId,
      loanDate: loan.loanDate,
      returnDate: loan.returnDate || null
    });
  }

  // Nuevo: obtener todos los préstamos
  async findAll(): Promise<Loan[]> {
    const loanRecords = await LoanModel.findAll();
    return loanRecords.map(
      (loanRecord) =>
        new Loan(
          loanRecord.id,
          loanRecord.userId,
          loanRecord.bookId,
          loanRecord.loanDate,
          loanRecord.returnDate || undefined
        )
    );
  }

  async findByUserId(userId: string): Promise<Loan[]> {
    const loanRecords = await LoanModel.findAll({ where: { userId } });
    return loanRecords.map(
      (loanRecord) =>
        new Loan(
          loanRecord.id,
          loanRecord.userId,
          loanRecord.bookId,
          loanRecord.loanDate,
          loanRecord.returnDate || undefined
        )
    );
  }

  async findByBookId(bookId: string): Promise<Loan[]> {
    const loanRecords = await LoanModel.findAll({ where: { bookId } });
    return loanRecords.map(
      (loanRecord) =>
        new Loan(
          loanRecord.id,
          loanRecord.userId,
          loanRecord.bookId,
          loanRecord.loanDate,
          loanRecord.returnDate || undefined
        )
    );
  }
}


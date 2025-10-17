// apps/backend/src/repositories/SequelizeLoanRepository.ts
import { Loan } from '../../../../domain/src/entities/Loan';
import { type LoanRepository } from '../../../../domain/src/use-cases/loan-book/LoanRepository';
import { LoanModel } from '../models/LoanModel';

export class SequelizeLoanRepository implements LoanRepository {
  async findById(id: string): Promise<Loan | null> {
    const loanRecord = await LoanModel.findByPk(id);
    if (!loanRecord) return null;

    // Convertir LoanModel a entidad Loan del dominio
    return new Loan(
      loanRecord.id,
      loanRecord.userId,
      loanRecord.bookId,
      loanRecord.loanDate,
      loanRecord.returnDate || undefined
    );
  }

  async save(loan: Loan): Promise<void> {
    // Guardar o actualizar LoanModel desde entidad Loan
    await LoanModel.upsert({
      id: loan.id,
      userId: loan.userId,
      bookId: loan.bookId,
      loanDate: loan.loanDate,
      returnDate: loan.returnDate || null
    });
  }
}


// domain/use-cases/loanBook/LoanBook.ts

import type { Loan } from '../../entities/Loan';
import type { LoanRepository } from './LoanRepository';

export class LoanBook {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loan: Loan) {
    if (!loan.bookId || !loan.userId) {
      throw new Error('BookId and UserId are required');
    }
    await this.loanRepository.addLoan(loan);
  }

  // async listLoans(): Promise<Loan[]> {
  //   return this.loanRepository.getAll();
  // }

  async getAll(): Promise<Loan[]> {
  return this.loanRepository.getAll();
  }

  async returnLoan(loanId: string, returnDate: Date) {
    await this.loanRepository.returnLoan(loanId, returnDate);
  }

  async getLoanById(id: string): Promise<Loan | null> {
    return this.loanRepository.getById(id);
  }

  async clearLoans(): Promise<void> {
    await this.loanRepository.clear();
  }
}


//frontend/src/domain/use-cases/loanBook/LoanBooks.ts

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

  async listLoans(): Promise<Loan[]> {
    return this.loanRepository.getLoans();
  }

  async returnLoan(loanId: string, returnDate: Date) {
    await this.loanRepository.markReturned(loanId, returnDate);
  }
}

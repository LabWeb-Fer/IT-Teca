import { LoanRepository } from '../loanBook/LoanRepository';

export class ReturnBook {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loanId: string, returnDate: Date) {
    const loan = await this.loanRepository.getLoanById(loanId);
    if (!loan) throw new Error('Loan not found');
    if (loan.returnDate) throw new Error('Loan already returned');

    await this.loanRepository.markReturned(loanId, returnDate);
  }
}

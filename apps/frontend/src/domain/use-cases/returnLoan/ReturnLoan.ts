// frontend/src/domain/use-cases/returnLoan/ReturnLoan.ts

import type { LoanRepository } from "../loanBook/LoanRepository";

export class ReturnLoan {
  constructor(private loanRepository: LoanRepository) {}

  async execute(loanId: string, returnDate: Date): Promise<void> {
    await this.loanRepository.returnLoan(loanId, returnDate);
  }
}

//domain/src/use-cases/return-book/ReturnBook.ts
import { type LoanRepository } from "../loan-book/LoanRepository";

interface ReturnBookRequest {
  loanId: string;
}

export class ReturnBook {
  constructor(private loanRepo: LoanRepository) {}

  async execute(request: ReturnBookRequest): Promise<void> {
    const loan = await this.loanRepo.findById(request.loanId);
    if (!loan) {
      throw new Error("Loan not found");
    }
    if (loan.isReturned()) {
      throw new Error("Book already returned");
    }

    // loan.return();
    loan.markAsReturned();
    await this.loanRepo.save(loan);
  }
}

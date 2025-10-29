
// frontend/src/data/repositories/InMemoryLoanRepository.ts
import type { LoanRepository } from '../../domain/use-cases/loanBook/LoanRepository';
//import { Loan } from '../../domain/entities/Loan';
import type { Loan } from '../../entities/Loan';

export class InMemoryLoanRepository implements LoanRepository {
  private loans: Loan[] = [];

  async addLoan(loan: Loan): Promise<void> {
    this.loans.push(loan);
  }

  async getAll(): Promise<Loan[]> {
    return [...this.loans];
  }

  async getById(id: string): Promise<Loan | null> {
    const loan = this.loans.find(l => l.id === id);
    return loan ? { ...loan } : null;
  }

  async returnLoan(loanId: string, returnDate: Date): Promise<void> {
    const loanIndex = this.loans.findIndex(l => l.id === loanId);

    if (loanIndex === -1) {
      throw new Error(`Loan with id "${loanId}" not found`);
    }

    if (this.loans[loanIndex].returnDate) {
      throw new Error(`Loan with id "${loanId}" is already returned`);
    }

    this.loans[loanIndex] = {
      ...this.loans[loanIndex],
      returnDate,
    };
  }

  async clear(): Promise<void> {
    this.loans = [];
  }
}

// frontend/src/domain/use-cases/listLoans/ListLoans.ts

import type { LoanRepository } from "../loanBook/LoanRepository";
import type { Loan } from '../../entities/Loan';

export class ListLoans {
  constructor(private loanRepository: LoanRepository) {}

  async execute(): Promise<Loan[]> {
    return await this.loanRepository.getAll();
  }
}

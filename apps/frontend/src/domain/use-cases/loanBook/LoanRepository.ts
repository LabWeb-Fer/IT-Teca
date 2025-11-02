
//domain/use-cases/loanBook/LoanRepository.ts

import type { Loan } from '../../entities/Loan';

export interface LoanRepository {
  addLoan(loan: Loan): Promise<void>;
  getAll(): Promise<Loan[]>;            
  getById(id: string): Promise<Loan | null>;
  returnLoan(loanId: string, returnDate: Date): Promise<void>; 
  clear(): Promise<void>;              
}


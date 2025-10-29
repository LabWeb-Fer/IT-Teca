

// // frontend/src/domain/use-cases/loanBook/LoanRepository.ts

// import {Loan} from '../../entities/Loan';

// export interface LoanRepository {
//   addLoan(loan: Loan): Promise<void>;
//   getAll(): Promise<Loan[]>;            
//   getById(id: string): Promise<Loan | null>;
//   returnLoan(loanId: string, returnDate: Date): Promise<void>; 
//   clear(): Promise<void>;              
// }


// import * as LoanModule from '../../entities/Loan';

// export interface LoanRepository {
//   addLoan(loan: LoanModule.Loan): Promise<void>;
//   getAll(): Promise<LoanModule.Loan[]>;            
//   getById(id: string): Promise<LoanModule.Loan | null>;
//   returnLoan(loanId: string, returnDate: Date): Promise<void>; 
//   clear(): Promise<void>;              
// }


import type { Loan } from '../../entities/Loan';

export interface LoanRepository {
  addLoan(loan: Loan): Promise<void>;
  getAll(): Promise<Loan[]>;            
  getById(id: string): Promise<Loan | null>;
  returnLoan(loanId: string, returnDate: Date): Promise<void>; 
  clear(): Promise<void>;              
}

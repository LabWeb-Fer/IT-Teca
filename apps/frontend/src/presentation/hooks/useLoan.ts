
// // frontend/src/presentation/hooks/useLoan.ts

// import { useState, useEffect } from 'react';
// import { InMemoryLoanRepository } from '../../data/repositories/InMemoryLoanRepository';
// import { LoanBook } from '../../domain/use-cases/loanBook/LoanBook';
// import { ListLoans } from '../../domain/use-cases/listLoans/ListLoans';
// import { ReturnLoan } from '../../domain/use-cases/returnLoan/ReturnLoan';
// import type { Loan } from '../../domain/entities/Loan';

// // Instancia única del repositorio in-memory
// const loanRepo = new InMemoryLoanRepository();

// // Casos de uso conectados al repo
// const loanBookUseCase = new LoanBook(loanRepo);
// const listLoansUseCase = new ListLoans(loanRepo);
// const returnLoanUseCase = new ReturnLoan(loanRepo);

// export function useLoan() {
//   const [loans, setLoans] = useState<Loan[]>([]);

//   // Cargar préstamos al iniciar
//   useEffect(() => {
//     loadLoans();
//   }, []);

//   const loadLoans = async () => {
//     const data = await listLoansUseCase.execute();
//     setLoans(data);
//   };

//   const addLoan = async (loan: Loan) => {
//     await loanBookUseCase.execute(loan);
//     await loadLoans();
//   };

//   const returnLoan = async (loanId: string) => {
//     await returnLoanUseCase.execute(loanId, new Date());
//     await loadLoans();
//   };

//   return { loans, addLoan, returnLoan, loadLoans };
// }



import { useState, useEffect } from 'react';
import { createLoanRepository } from '../../data/repositories/factories/loanRepositoryFactory';
import { LoanBook } from '../../domain/use-cases/loanBook/LoanBook';
import type { Loan } from '../../domain/entities/Loan';

const loanRepo = createLoanRepository();
const loanBookUseCase = new LoanBook(loanRepo);

export function useLoan() {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    loadLoans();
  }, []);

  async function loadLoans() {
    const result = await loanBookUseCase.getAll();
    setLoans(result);
  }

  async function addLoan(loan: Loan) {
    await loanBookUseCase.execute(loan);
    await loadLoans();
  }

  async function returnLoan(loanId: string, returnDate: Date) {
    await loanBookUseCase.returnLoan(loanId, returnDate);
    await loadLoans();
  }

  return { loans, loadLoans, addLoan, returnLoan };
}

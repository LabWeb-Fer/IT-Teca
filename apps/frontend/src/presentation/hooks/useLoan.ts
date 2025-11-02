
// // frontend/src/presentation/hooks/useLoan.ts

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

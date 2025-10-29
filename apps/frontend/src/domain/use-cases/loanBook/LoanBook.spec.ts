// frontend/src/domain/use-cases/loanBook/LoanBook.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryLoanRepository } from '../../../data/repositories/InMemoryLoanRepository';
import { Loan } from '../../entities/Loan';

describe('LoanBook Use Case', () => {
  let loanRepo: InMemoryLoanRepository;

  beforeEach(() => {
    loanRepo = new InMemoryLoanRepository();
  });

  it('should add a loan successfully', async () => {
    const loan: Loan = { id: '1', bookId: 'b1', userId: 'u1', loanDate: new Date() };
    await loanRepo.addLoan(loan);

    const loans = await loanRepo.getAll(); 
    expect(loans.length).toBe(1);
    expect(loans[0]).toEqual(loan);
  });

  it('should get a loan by id', async () => {
    const loan: Loan = { id: '2', bookId: 'b2', userId: 'u2', loanDate: new Date() };
    await loanRepo.addLoan(loan);

    const foundLoan = await loanRepo.getById('2'); 
    expect(foundLoan).not.toBeNull();
    expect(foundLoan).toEqual(loan);
  });

  it('should mark a loan as returned', async () => {
    const loan: Loan = { id: '3', bookId: 'b3', userId: 'u3', loanDate: new Date() };
    await loanRepo.addLoan(loan);

    const returnDate = new Date();
    await loanRepo.returnLoan('3', returnDate); 

    const updatedLoan = await loanRepo.getById('3');
    expect(updatedLoan?.returnDate).toEqual(returnDate);
  });

  it('should return null if loan id does not exist', async () => {
    const foundLoan = await loanRepo.getById('999');
    expect(foundLoan).toBeNull();
  });
});

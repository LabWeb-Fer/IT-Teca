// frontend/src/domain/use-cases/returnBook/ReturnBook.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryLoanRepository } from '../../../data/repositories/InMemoryLoanRepository';
import { Loan } from '../../entities/Loan';

describe('ReturnBook Use Case', () => {
  let loanRepo: InMemoryLoanRepository;

  beforeEach(() => {
    loanRepo = new InMemoryLoanRepository();
  });

  it('should return a loan successfully', async () => {
    const loan: Loan = { id: '1', bookId: 'b1', userId: 'u1', loanDate: new Date() };
    await loanRepo.addLoan(loan);

    const returnDate = new Date();
    await loanRepo.returnLoan('1', returnDate);

    const updatedLoan = await loanRepo.getById('1');
    expect(updatedLoan?.returnDate).toEqual(returnDate);
  });

  it('should throw error if loan does not exist', async () => {
    const returnDate = new Date();
    await expect(() => loanRepo.returnLoan('999', returnDate)).rejects.toThrow(
      'Loan with id "999" not found'
    );
  });

  it('should throw error if loan already returned', async () => {
    const loan: Loan = { id: '2', bookId: 'b2', userId: 'u2', loanDate: new Date() };
    await loanRepo.addLoan(loan);

    const firstReturnDate = new Date();
    await loanRepo.returnLoan('2', firstReturnDate);

    const secondReturnDate = new Date();
    await expect(() => loanRepo.returnLoan('2', secondReturnDate)).rejects.toThrow(
      'Loan with id "2" is already returned'
    );
  });
});

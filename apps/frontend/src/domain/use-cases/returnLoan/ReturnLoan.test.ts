// frontend/src/domain/use-cases/returnLoan/ReturnLoan.test.ts
import { describe, it, beforeEach, expect } from 'vitest';
import { InMemoryLoanRepository } from '../../../data/repositories/InMemoryLoanRepository';
import { Loan } from '../../entities/Loan';
import { ReturnLoan } from './ReturnLoan';

describe('ReturnLoan Use Case', () => {
  let repo: InMemoryLoanRepository;
  let returnLoan: ReturnLoan;

  beforeEach(async () => {
    repo = new InMemoryLoanRepository();
    returnLoan = new ReturnLoan(repo);
    await repo.clear(); 
  });

  it('debería marcar un préstamo como devuelto', async () => {
    const loan: Loan = {
      id: '10',
      bookId: 'book-1',
      userId: 'user-1',
      loanDate: new Date('2025-10-01'),
    };

    await repo.addLoan(loan);

    const returnDate = new Date('2025-10-10');
    await returnLoan.execute(loan.id, returnDate);

    const updated = await repo.getById(loan.id);
    expect(updated?.returnDate).toEqual(returnDate);
  });

  it('debería lanzar error si el préstamo no existe', async () => {
    const returnDate = new Date();
    await expect(returnLoan.execute('no-existe', returnDate)).rejects.toThrow(
      'Loan with id "no-existe" not found'
    );
  });
});

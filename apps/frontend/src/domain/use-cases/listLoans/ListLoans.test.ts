// frontend/src/domain/use-cases/listLoans/ListLoans.test.ts
import { describe, it, beforeEach, expect } from 'vitest';
import { InMemoryLoanRepository } from '../../../data/repositories/InMemoryLoanRepository';
import { Loan } from '../../entities/Loan';
import { ListLoans } from './ListLoans';

describe('ListLoans Use Case', () => {
  let repo: InMemoryLoanRepository;
  let listLoans: ListLoans;

  beforeEach(async () => {
    repo = new InMemoryLoanRepository();
    listLoans = new ListLoans(repo);
    await repo.clear(); 
  });

  it('debería listar todos los préstamos almacenados', async () => {
    const loan1: Loan = {
      id: '1',
      bookId: 'b1',
      userId: 'u1',
      loanDate: new Date('2025-10-01'),
    };
    const loan2: Loan = {
      id: '2',
      bookId: 'b2',
      userId: 'u2',
      loanDate: new Date('2025-10-05'),
    };

    await repo.addLoan(loan1);
    await repo.addLoan(loan2);

    const result = await listLoans.execute();

    expect(result).toHaveLength(2);
    expect(result[0].bookId).toBe('b1');
    expect(result[1].bookId).toBe('b2');
  });

  it('debería devolver un array vacío si no hay préstamos', async () => {
    const result = await listLoans.execute();
    expect(result).toEqual([]);
  });
});

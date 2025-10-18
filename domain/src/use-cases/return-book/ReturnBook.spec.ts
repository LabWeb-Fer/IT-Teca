import { describe, it, expect, beforeEach } from 'vitest';
import { Book } from '../../entities/Book';
import { User } from '../../entities/User';
import { Loan } from '../../entities/Loan';
import { ReturnBook } from './ReturnBook';
import { type LoanRepository } from '../loan-book/LoanRepository';

class InMemoryLoanRepo implements LoanRepository {
  private loans: Loan[] = [];

  async save(loan: Loan): Promise<void> {
    const index = this.loans.findIndex(l => l.id === loan.id);
    if (index >= 0) this.loans[index] = loan;
    else this.loans.push(loan);
  }

  async findById(id: string): Promise<Loan | null> {
    return this.loans.find(loan => loan.id === id) ?? null;
  }
}

describe("ReturnBook", () => {
  it("should mark a loan as returned", async () => {
    const repo = new InMemoryLoanRepo();
    const returnBook = new ReturnBook(repo);

    const loan = new Loan(
      "loan-1",
      "user-1",
      "book-1",
      new Date()
    );

    await repo.save(loan);

    await returnBook.execute({ loanId: loan.id });

    const updated = await repo.findById(loan.id);
    expect(updated?.isReturned()).toBe(true);
    expect(updated?.returnDate).toBeInstanceOf(Date);
  });

  it("should throw if loan not found", async () => {
    const repo = new InMemoryLoanRepo();
    const returnBook = new ReturnBook(repo);

    await expect(() =>
      returnBook.execute({ loanId: "not-found" })
    ).rejects.toThrow("Loan not found");
  });
});

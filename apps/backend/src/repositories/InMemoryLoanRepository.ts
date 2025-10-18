import { type LoanRepository } from "domain/src/use-cases/loan-book/LoanRepository";
import { Loan } from "domain/src/entities/Loan";

export class InMemoryLoanRepository implements LoanRepository {
    private loans: Loan[] = [];

    async save(loan: Loan): Promise < void > {
        const index = this.loans.findIndex(l => l.id === loan.id);
        if (index >= 0) this.loans[index] = loan;
        else this.loans.push(loan);
    }

    async findById(id: string): Promise < Loan | null > {
        return this.loans.find(loan => loan.id === id) ?? null;
    }
}
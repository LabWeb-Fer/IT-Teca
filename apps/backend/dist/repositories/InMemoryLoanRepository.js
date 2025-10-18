import {} from "domain/src/use-cases/loan-book/LoanRepository";
import { Loan } from "domain/src/entities/Loan";
export class InMemoryLoanRepository {
    constructor() {
        this.loans = [];
    }
    async save(loan) {
        const index = this.loans.findIndex(l => l.id === loan.id);
        if (index >= 0)
            this.loans[index] = loan;
        else
            this.loans.push(loan);
    }
    async findById(id) {
        return this.loans.find(loan => loan.id === id) ?? null;
    }
}
//# sourceMappingURL=InMemoryLoanRepository.js.map
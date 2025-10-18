import { type LoanRepository } from "domain/src/use-cases/loan-book/LoanRepository";
import { Loan } from "domain/src/entities/Loan";
export declare class InMemoryLoanRepository implements LoanRepository {
    private loans;
    save(loan: Loan): Promise<void>;
    findById(id: string): Promise<Loan | null>;
}
//# sourceMappingURL=InMemoryLoanRepository.d.ts.map
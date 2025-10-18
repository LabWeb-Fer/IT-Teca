import { Loan } from '../../../../domain/src/entities/Loan';
import { type LoanRepository } from '../../../../domain/src/use-cases/loan-book/LoanRepository';
export declare class SequelizeLoanRepository implements LoanRepository {
    findById(id: string): Promise<Loan | null>;
    save(loan: Loan): Promise<void>;
    findAll(): Promise<Loan[]>;
    findByUserId(userId: string): Promise<Loan[]>;
    findByBookId(bookId: string): Promise<Loan[]>;
}
//# sourceMappingURL=SequelizeLoanRepository.d.ts.map
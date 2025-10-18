import { type LoanRepository } from "../loan-book/LoanRepository";
interface ReturnBookRequest {
    loanId: string;
}
export declare class ReturnBook {
    private loanRepo;
    constructor(loanRepo: LoanRepository);
    execute(request: ReturnBookRequest): Promise<void>;
}
export {};
//# sourceMappingURL=ReturnBook.d.ts.map
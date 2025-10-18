import { Loan } from "../../entities/Loan";
import { BookRepository } from "../add-book/BookRepository";
import { UserRepository } from "../register-user/UserRepository";
import { LoanRepository } from "./LoanRepository";
interface LoanBookRequest {
    userId: string;
    bookId: string;
}
export declare class LoanBook {
    private userRepo;
    private bookRepo;
    private loanRepo;
    constructor(userRepo: UserRepository, bookRepo: BookRepository, loanRepo: LoanRepository);
    execute(request: LoanBookRequest): Promise<Loan>;
}
export {};
//# sourceMappingURL=LoanBook.d.ts.map
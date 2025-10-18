import { Book } from "../../entities/Book";
import { Loan } from "../../entities/Loan";
import { User } from "../../entities/User";
import { BookRepository } from "../add-book/BookRepository";
import { UserRepository } from "../register-user/UserRepository";
import { LoanRepository } from "./LoanRepository";
export class LoanBook {
    constructor(userRepo, bookRepo, loanRepo) {
        this.userRepo = userRepo;
        this.bookRepo = bookRepo;
        this.loanRepo = loanRepo;
    }
    async execute(request) {
        const user = await this.userRepo.findById(request.userId);
        if (!user)
            throw new Error("User not found");
        const book = await this.bookRepo.findById(request.bookId);
        if (!book)
            throw new Error("Book not found");
        if (!book.isAvailable)
            throw new Error("Book is not available");
        book.lend();
        const loan = new Loan(crypto.randomUUID(), user.id, book.id, new Date());
        await this.bookRepo.save(book); // Persistir el cambio de disponibilidad
        await this.loanRepo.save(loan);
        return loan;
    }
}
//# sourceMappingURL=LoanBook.js.map
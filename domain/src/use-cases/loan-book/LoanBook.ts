import { Book } from "../../entities/Book";
import { Loan } from "../../entities/Loan";
import { User } from "../../entities/User";
import { BookRepository } from "../add-book/BookRepository";
import { UserRepository } from "../register-user/UserRepository";
import { LoanRepository } from "./LoanRepository";

interface LoanBookRequest {
  userId: string;
  bookId: string;
}

export class LoanBook {
  constructor(
    private userRepo: UserRepository,
    private bookRepo: BookRepository,
    private loanRepo: LoanRepository
  ) {}

  async execute(request: LoanBookRequest): Promise<Loan> {
    const user = await this.userRepo.findById(request.userId);
    if (!user) throw new Error("User not found");

    const book = await this.bookRepo.findById(request.bookId);
    if (!book) throw new Error("Book not found");

    if (!book.isAvailable) throw new Error("Book is not available");

    book.lend();

    const loan = new Loan(
      crypto.randomUUID(),
      user.id,
      book.id,
      new Date()
    );

    await this.bookRepo.save(book); // Persistir el cambio de disponibilidad
    await this.loanRepo.save(loan);

    return loan;
  }
}

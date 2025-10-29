
//frontend/src/domain/entities/Loan.ts

export interface Loan {
  id: string;
  bookId: string;
  userId: string;
  loanDate: Date;
  returnDate?: Date;
}

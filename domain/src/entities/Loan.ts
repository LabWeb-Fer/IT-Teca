export class Loan {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly bookId: string,
    public readonly loanDate: Date,
    public returnDate: Date | null = null
  ) {}

  return() {
    this.returnDate = new Date();
  }

  isReturned(): boolean {
    return this.returnDate !== null;
  }
}

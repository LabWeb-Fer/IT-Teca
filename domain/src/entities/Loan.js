export class Loan {
    constructor(id, userId, bookId, loanDate, returnDate = null) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
    }
    markAsReturned() {
        this.returnDate = new Date();
    }
    isReturned() {
        return this.returnDate !== null;
    }
}
//# sourceMappingURL=Loan.js.map
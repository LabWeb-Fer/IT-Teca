//domain/src/use-cases/return-book/ReturnBook.ts
import {} from "../loan-book/LoanRepository";
export class ReturnBook {
    constructor(loanRepo) {
        this.loanRepo = loanRepo;
    }
    async execute(request) {
        const loan = await this.loanRepo.findById(request.loanId);
        if (!loan) {
            throw new Error("Loan not found");
        }
        if (loan.isReturned()) {
            throw new Error("Book already returned");
        }
        // loan.return();
        loan.markAsReturned();
        await this.loanRepo.save(loan);
    }
}
//# sourceMappingURL=ReturnBook.js.map
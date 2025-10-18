export declare class Loan {
    readonly id: string;
    readonly userId: string;
    readonly bookId: string;
    readonly loanDate: Date;
    returnDate: Date | null;
    constructor(id: string, userId: string, bookId: string, loanDate: Date, returnDate?: Date | null);
    markAsReturned(): void;
    isReturned(): boolean;
}
//# sourceMappingURL=Loan.d.ts.map
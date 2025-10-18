import { Model } from 'sequelize';
export declare class LoanModel extends Model {
    id: string;
    userId: string;
    bookId: string;
    loanDate: Date;
    returnDate: Date | null;
}
//# sourceMappingURL=LoanModel.d.ts.map
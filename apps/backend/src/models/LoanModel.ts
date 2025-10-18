// apps/backend/src/models/LoanModel.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class LoanModel extends Model {
    declare id: string;
    declare userId: string;
    declare bookId: string;
    declare loanDate: Date;
    declare returnDate: Date | null;
}

LoanModel.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    bookId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loanDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Loan',
    tableName: 'loans',
    timestamps: false,
});
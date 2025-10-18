// apps/backend/src/models/UserModel.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
export class UserModel extends Model {
}
UserModel.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'lector'),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});
//# sourceMappingURL=UserModel.js.map
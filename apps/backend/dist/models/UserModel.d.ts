import { Model } from 'sequelize';
export declare class UserModel extends Model {
    id: string;
    email: string;
    password: string;
    role: 'admin' | 'lector';
}
//# sourceMappingURL=UserModel.d.ts.map
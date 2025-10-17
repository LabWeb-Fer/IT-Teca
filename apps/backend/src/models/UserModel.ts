import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class UserModel extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare role: 'admin' | 'member';
}

UserModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'member'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

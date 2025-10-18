
//app/backend/src/models/BookModels.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class BookModel extends Model {
  declare id: string;
  declare title: string;
  declare author: string;
  declare isbn: string;
  declare available: boolean;
}

BookModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,  
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    timestamps: false,
  }
);

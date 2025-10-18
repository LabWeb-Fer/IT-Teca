// apps/backend/src/db.ts

import 'dotenv/config';
import { Sequelize } from 'sequelize';

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
    throw new Error(' La variable de entorno DB_URL no está definida');
}

export const sequelize = new Sequelize(dbUrl, {
    dialect: 'mysql',
    logging: false, //  true en debugg
});
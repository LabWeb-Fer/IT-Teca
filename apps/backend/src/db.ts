// // apps/backend/src/db.ts
import { Sequelize } from 'sequelize';
import 'dotenv/config';


const isDocker = process.env.DOCKER_ENV === 'true';

const host = isDocker ? process.env.DB_HOST_DOCKER : process.env.DB_HOST_LOCAL;
const port = isDocker ? process.env.DB_PORT_DOCKER : process.env.DB_PORT_LOCAL;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;


if (!host || !port || !user || !password || !dbName) {
  throw new Error('Las variables de entorno de la DB no están definidas');
}


export const sequelize = new Sequelize(`mysql://${user}:${password}@${host}:${port}/${dbName}`, {
  dialect: 'mysql',
  logging: false,
});


sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

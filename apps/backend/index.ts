
import 'dotenv/config';
import Fastify from 'fastify';
import { sequelize } from './src/db.js';
import cors from '@fastify/cors'; 

import './src/models/LoanModel';
import './src/models/BookModel';
import './src/models/UserModel';

import { userRoutes } from './src/routes/userRoutes';
import { bookRoutes } from './src/routes/bookRoutes';
import { loanRoutes } from './src/routes/loanRoutes';

async function buildServer() {
  const app = Fastify();

  const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:5173').split(',');
  
  try {

    await app.register(cors, {
      origin: allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    });
    console.log('CORS configurado correctamente.');
  } catch (error) {
    console.error('Error al registrar CORS:', error);
    process.exit(1);
  }

  try {

    await sequelize.authenticate();
    await sequelize.sync(); 
    console.log('Conectado correctamente a la base de datos MySQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }

  try {

    app.register(userRoutes);
    app.register(bookRoutes);
    app.register(loanRoutes);
    console.log('Rutas registradas correctamente.');
  } catch (error) {
    console.error('Error al registrar rutas:', error);
    process.exit(1);
  }

  return app;
}

buildServer()
  .then(async app => {
    const port = Number(process.env.PORT) || 3000;

    await app.listen({ port: port, host: '0.0.0.0' });

    console.log(`Servidor corriendo en puerto: http://0.0.0.0:${port}`);
  })
  .catch(err => {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  });

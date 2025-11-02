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


// async function buildServer() {
//   const app = Fastify();

//   const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:5173').split(',');
  
//   await app.register(cors, {
//     origin: allowedOrigins, 
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   });


 async function buildServer() {
  const app = Fastify();

  const allowedOrigins = [
    'http://localhost:5173', 
    'http://localhost:6006',
    // Vitest 
  ];
  
  await app.register(cors, {
    origin: allowedOrigins, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }); 

  try {
    await sequelize.authenticate();
    await sequelize.sync(); // sincroniza modelos con BD
    console.log('Conectado correctamente a la base de datos MySQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }

  app.register(userRoutes);
  app.register(bookRoutes);
  app.register(loanRoutes);

  return app;
}

buildServer()
  .then(async app => {

    const port = Number(process.env.PORT) || 3000; 

    await app.listen({ port: port });

    console.log(`Servidor corriendo en puerto en: http://localhost:${port}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
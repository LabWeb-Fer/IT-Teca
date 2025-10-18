// import 'dotenv/config';
// import Fastify from 'fastify';
// import { sequelize } from './src/db.js';
// import { LoanModel } from './src/models/LoanModel.ts';
// import { loanRoutes } from './src/routes/loanRoutes.ts';

// async function buildServer() {
//   const fastify = Fastify();

//   try {
//     await sequelize.authenticate();
//     await sequelize.sync(); //  migraciones en producción
//     console.log('Conectado correctamente a la base de datos MySQL');
//   } catch (error) {
//     console.error(' Error al conectar a la base de datos:', error);
//     process.exit(1);
//   }

//   // Registrar rutas
//   await loanRoutes(fastify);

//   return fastify;
// }

// buildServer()
//   .then(fastify =>
//     fastify.listen({ port: 3000 }).then(() => {
//       console.log('🚀 Server listening on http://localhost:3000');
//     })
//   )
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

///////////////////////////////

//app/backend/indec.ts
import 'dotenv/config';
import Fastify from 'fastify';
import { sequelize } from './src/db.js';

// Importa modelos para inicializar (sin await, solo importa)
import './src/models/LoanModel';
import './src/models/BookModel';
import './src/models/UserModel';

// Importa rutas
import { userRoutes } from './src/routes/userRoutes';
import { bookRoutes } from './src/routes/bookRoutes';
import { loanRoutes } from './src/routes/loanRoutes';

async function buildServer() {
  const app = Fastify();

  try {
    await sequelize.authenticate();
    await sequelize.sync(); // sincroniza modelos con BD
    console.log('Conectado correctamente a la base de datos MySQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }

  // Registrar rutas
  app.register(userRoutes);
  app.register(bookRoutes);
  app.register(loanRoutes);

  return app;
}

buildServer()
  .then(async app => {
    await app.listen({ port: Number(process.env.PORT) || 3000 });
    console.log('🚀 Server listening on http://localhost:3000');
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

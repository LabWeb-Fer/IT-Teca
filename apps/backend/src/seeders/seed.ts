// import { sequelize } from '../db';
// import { BookModel } from '../models/BookModel';
// import { UserModel } from '../models/UserModel';
// import { LoanModel } from '../models/LoanModel';

// async function seed() {
//   try {
//     await sequelize.sync({ force: true }); // Elimina y recrea tablas

//     // Crear libros
//     await BookModel.bulkCreate([
//       { id: 'book1', title: '1984', author: 'George Orwell', isbn: '1234567890', available: false }, // prestado
//       { id: 'book2', title: 'Brave New World', author: 'Aldous Huxley', isbn: '0987654321', available: false }, // prestado
//       { id: 'book3', title: 'Fahrenheit 451', author: 'Ray Bradbury', isbn: '1122334455', available: true },
//       { id: 'book4', title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '6677889900', available: true },
//     ]);

//     // Crear usuarios
//     await UserModel.bulkCreate([
//       { id: 'user1', name: 'Fernando', email: 'fernando@example.com', role: 'member' },
//       { id: 'user2', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
//     ]);

//     // Crear préstamos
//     await LoanModel.bulkCreate([
//       {
//         id: 'loan1',
//         userId: 'user1',
//         bookId: 'book1',
//         loanDate: new Date('2025-10-10T10:00:00'),
//         returnDate: null,
//       },
//       {
//         id: 'loan2',
//         userId: 'user1',
//         bookId: 'book2',
//         loanDate: new Date('2025-10-12T14:30:00'),
//         returnDate: null,
//       },
//     ]);

//     console.log('✅ Seed completed successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error seeding data:', error);
//     process.exit(1);
//   }
// }

// seed();



// apps/backend/src/seeders/seed.ts
import { sequelize } from '../db';
import { BookModel } from '../models/BookModel';
import { UserModel } from '../models/UserModel';
import { LoanModel } from '../models/LoanModel';
import { v4 as uuid } from 'uuid';

async function seed() {
  const transaction = await sequelize.transaction();
  try {
    // Limpia y sincroniza la DB
    await sequelize.sync({ force: true });

    // Seeds separados por entidad
    const books = await seedBooks();
    const users = await seedUsers();
    const loans = await seedLoans(users, books);

    // Confirmar transacción
    await transaction.commit();

    // Verificación visual
    console.table(books, ['id', 'title', 'isbn']);
    console.table(users, ['id', 'name', 'email']);
    console.table(loans, ['id', 'bookId', 'userId', 'loanDate']);

    console.log('✅ Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    await transaction.rollback();
    process.exit(1);
  }
}

// ─── Seeds ─────────────────────────────────────────

async function seedBooks() {
  const books = [
    {
      id: uuid(),
      title: '1984',
      author: 'George Orwell',
      isbn: '1234567890',
      available: true,
    },
    {
      id: uuid(),
      title: 'Brave New World',
      author: 'Aldous Huxley',
      isbn: '0987654321',
      available: true,
    },
    {
      id: uuid(),
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      isbn: '1122334455',
      available: true,
    },
    {
      id: uuid(),
      title: 'The Handmaid’s Tale',
      author: 'Margaret Atwood',
      isbn: '6677889900',
      available: true,
    },
  ];

  await BookModel.bulkCreate(books);
  return books;
}

async function seedUsers() {
  const users = [
    {
      id: uuid(),
      name: 'Fernando',
      email: 'fernando@example.com',
      role: 'member',
    },
    {
      id: uuid(),
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
    },
  ];

  await UserModel.bulkCreate(users);
  return users;
}

async function seedLoans(users: any[], books: any[]) {
  const now = new Date();
  const loans = [
    {
      id: uuid(),
      userId: users[0].id,
      bookId: books[0].id,
      loanDate: now,
      returnDate: null,
    },
    {
      id: uuid(),
      userId: users[1].id,
      bookId: books[1].id,
      loanDate: now,
      returnDate: null,
    },
  ];

  await LoanModel.bulkCreate(loans);
  return loans;
}

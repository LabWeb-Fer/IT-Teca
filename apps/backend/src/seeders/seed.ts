// apps/backend/src/seeders/seed.ts
import { sequelize } from '../db';
import { BookModel } from '../models/BookModel';
import { UserModel } from '../models/UserModel';
import { LoanModel } from '../models/LoanModel';
import { v4 as uuid } from 'uuid';

async function seed() {
  const transaction = await sequelize.transaction();
  try {

    await sequelize.sync({ force: true, transaction });

    const books = await seedBooks({ transaction });
    const users = await seedUsers({ transaction });
    const loans = await seedLoans(users, books, { transaction });

    await transaction.commit();

    console.table(books, ['id', 'title', 'isbn']);
    console.table(users, ['id', 'name', 'email', 'role']);
    console.table(loans, ['id', 'bookId', 'userId', 'loanDate']);

    console.log('✅ Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    await transaction.rollback();
    process.exit(1);
  }
}

// ─── Seeds 

async function seedBooks({ transaction }: { transaction: any }) {
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

  await BookModel.bulkCreate(books, { transaction });
  return books;
}

async function seedUsers({ transaction }: { transaction: any }) {
  const users = [
    {
      id: uuid(),
      name: 'Fernando',
      email: 'fernando@example.com',
      password: 'secret123',  
      role: 'lector',         
    },
    {
      id: uuid(),
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'adminpass',
      role: 'admin',
    },
  ];

  await UserModel.bulkCreate(users, { transaction });
  return users;
}

async function seedLoans(users: any[], books: any[], { transaction }: { transaction: any }) {
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

  await LoanModel.bulkCreate(loans, { transaction });
  return loans;
}

seed();

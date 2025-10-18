
// apps/backend/src/routes/userRoutes.ts

import type { FastifyInstance } from 'fastify';
import { RegisterUser } from '../../../../domain/src/use-cases/register-user/RegisterUser';
import { SequelizeUserRepository } from '../repositories/SequelizeUserRepository';

export async function userRoutes(app: FastifyInstance) {
  const userRepo = new SequelizeUserRepository();

  app.post('/users', async (request, reply) => {
    const { email, password, role } = request.body as {
      email: string;
      password: string;
      role: 'admin' | 'lector';
    };

    try {
      const registerUser = new RegisterUser(userRepo);
      await registerUser.execute({ email, password, role });
      reply.code(201).send({ message: 'User created' });
    } catch (err: any) {
      reply.code(400).send({ error: err.message });
    }
  });

  app.get('/users', async (request, reply) => {
    try {
      const users = await userRepo.findAll();
      reply.code(200).send(users);
    } catch (err: any) {
      reply.code(500).send({ error: 'Failed to fetch users' });
    }
  });

  app.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const user = await userRepo.findById(id);
      if (!user) {
        reply.code(404).send({ error: 'User not found' });
      } else {
        reply.code(200).send(user);
      }
    } catch (err: any) {
      reply.code(500).send({ error: 'Failed to fetch user' });
    }
  });

  app.get('/users/email/:email', async (request, reply) => {
    const { email } = request.params as { email: string };

    try {
      const user = await userRepo.findByEmail(email);
      if (!user) {
        reply.code(404).send({ error: 'User not found' });
      } else {
        reply.code(200).send(user);
      }
    } catch (err: any) {
      reply.code(500).send({ error: 'Failed to fetch user by email' });
    }
  });
}

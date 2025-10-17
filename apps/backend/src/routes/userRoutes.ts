import type { FastifyInstance } from 'fastify';
import { RegisterUser } from '../../../../domain/src/use-cases/register-user/RegisterUser';
import { SequelizeUserRepository } from '../repositories/SequelizeUserRepository';

export async function userRoutes(app: FastifyInstance) {
  const userRepo = new SequelizeUserRepository();

  app.post('/users', async (request, reply) => {
    const { name, email, password, role } = request.body as {
      name: string;
      email: string;
      password: string;
      role: 'admin' | 'member';
    };
    try {
      const registerUser = new RegisterUser(userRepo);
      await registerUser.execute({ name, email, password, role });
      reply.code(201).send({ message: 'User created' });
    } catch (err: any) {
      reply.code(400).send({ error: err.message });
    }
  });
}

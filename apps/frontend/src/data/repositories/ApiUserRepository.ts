// apps/frontend/src/data/repositories/ApiUserRepository.ts

import type { User } from '../../domain/entities/User';
import type { UserRepository } from '../../domain/use-cases/registerUser/UserRepository';

// export class ApiUserRepository implements UserRepository {
//   private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//   // //forma simple
//   // async addUser(user: User): Promise<void> {
//   //   await fetch(`${this.baseUrl}/users`, {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify(user),
//   //   });
//   // }

//   async addUser(user: User): Promise<User> {
//     const response = await fetch(`${this.baseUrl}/users`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//     });

//     if (!response.ok) {
//     const error = await response.json().catch(() => ({ message: 'Error adding user' }));
//     throw new Error(error.message || 'Error adding user');
//     }
//     return await response.json();
//     }

//   async getUsers(): Promise<User[]> {
//     const response = await fetch(this.baseUrl);

//     if (!response.ok) throw new Error('Error fetching users');
//     return await response.json();
//   }

//   async getUserById(id: string): Promise<User | null> {
//     const response = await fetch(`${this.baseUrl}/${id}`);
//     if (response.status === 404) return null;
//     if (!response.ok) throw new Error('Error fetching user');
//     return await response.json();
//   }

//   async clear(): Promise<void> {
//     const response = await fetch(`${this.baseUrl}/clear`, { method: 'DELETE' });
//     if (!response.ok) throw new Error('Error clearing users');
//   }
// }


export class ApiUserRepository implements UserRepository {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  async addUser(user: User): Promise<User> {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Error adding user' }));
      throw new Error(error.message || 'Error adding user');
    }

    return await response.json();
  }

  async getUsers(): Promise<User[]> {
    const response = await fetch(`${this.baseUrl}/users`);
    if (!response.ok) throw new Error('Error fetching users');
    return await response.json();
  }

  async getUserById(id: string): Promise<User | null> {
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    if (response.status === 404) return null;
    if (!response.ok) throw new Error('Error fetching user');
    return await response.json();
  }

  async clear(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/users/clear`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error clearing users');
  }
}

import React, { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser';
import type { User } from '../../domain/entities/User';

export const UserList: React.FC = () => {
  const { users, addUser, loadUsers } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = () => {
    addUser({ id: Date.now().toString(), name, email });
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

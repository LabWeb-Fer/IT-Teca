// apps/frontend/src/presentation/components/UserList.stories.tsx
import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import { UserList } from './UserList';
import { useUser } from '../hooks/useUser';
import type { User } from '../../domain/entities/User';

const meta: Meta<typeof UserList> = {
  title: 'Components/UserList',
  component: UserList,
};

export default meta;

export const WithSeededUsers = () => {
  const { addUser, loadUsers } = useUser();

  useEffect(() => {
    const seed: User[] = [
      { id: 'u1', name: 'Fernando', email: 'fernando@example.com' },
      { id: 'u2', name: 'Ana', email: 'ana@example.com' },
    ];

    (async () => {
      await loadUsers();
      for (const s of seed) {
        await addUser(s);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserList />;
};

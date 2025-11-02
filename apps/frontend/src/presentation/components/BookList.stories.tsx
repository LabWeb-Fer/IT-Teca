
//frontend/src/presentation/components/BookList.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { BookList } from './BookList';

const meta: Meta<typeof BookList> = {
  title: 'Components/BookList',
  component: BookList,
};

export default meta;
type Story = StoryObj<typeof BookList>;

export const Default: Story = {
  args: {
    books: [
      { id: '1', title: '1984', author: 'George Orwell' },
      { id: '2', title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    ],
  },
};

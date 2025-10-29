//frontend/src/presentation/components/BookList.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BookList } from './BookList';

const meta: Meta<typeof BookList> = {
  title: 'Components/BookList',
  component: BookList,
};
export default meta;

type Story = StoryObj<typeof BookList>;

export const Default: Story = {};

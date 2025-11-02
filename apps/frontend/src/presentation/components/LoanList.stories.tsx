import React from 'react';
import  type { Meta, StoryObj } from '@storybook/react';
import { LoanList } from './LoanList';

const meta: Meta<typeof LoanList> = {
  title: 'Components/LoanList',
  component: LoanList,
};
export default meta;

type Story = StoryObj<typeof LoanList>;

export const Default: Story = {};

// apps/frontend/src/presentation/components/LoanList.stories.tsx

// import React from 'react';
// import  type { Meta, StoryObj } from '@storybook/react';
// import { LoanList } from './LoanList';

// const meta: Meta<typeof LoanList> = {
//   title: 'Components/LoanList',
//   component: LoanList,
// };
// export default meta;

// type Story = StoryObj<typeof LoanList>;

// export const Default: Story = {};


// apps/frontend/src/presentation/components/LoanList.stories.tsx

import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import { LoanList } from './LoanList';
import { useLoan } from '../hooks/useLoan';
import type { Loan } from '../../domain/entities/Loan';

const meta: Meta<typeof LoanList> = {
  title: 'Components/LoanList',
  component: LoanList,
};

export default meta;

export const WithSeededLoans = () => {
  const { addLoan, loadLoans } = useLoan();

  useEffect(() => {
    const seed: Loan[] = [
      { id: 'l1', bookId: '1', userId: 'u1', loanDate: new Date('2025-10-01') },
      { id: 'l2', bookId: '2', userId: 'u2', loanDate: new Date('2025-10-03') },
    ];

    (async () => {
      await loadLoans();
      for (const s of seed) {
        await addLoan(s);
      }
    })();

  }, []);

  return <LoanList />;
};

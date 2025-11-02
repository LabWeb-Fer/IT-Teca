// frontend/src/App.tsx
import React from 'react';
import { LoanList } from './presentation/components/LoanList';
import { BookList } from './presentation/components/BookList';
import { UserList } from './presentation/components/UserList';
import './App.css'

function App() {
  return (
    <div>
      <h1>📖 Biblioteca - Demo IT-Teca</h1>
      <BookList />
      <UserList />
      <LoanList />
    </div>
  );
}

export default App;
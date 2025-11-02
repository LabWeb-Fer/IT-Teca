// frontend/src/presentation/components/LoanList.tsx

import React, { useState } from 'react';
import { useLoan } from '../hooks/useLoan';
import type { Loan } from '../../domain/entities/Loan';

export function LoanList() {
  const { loans, addLoan, returnLoan } = useLoan();
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleAdd = async () => {
    if (!bookId || !userId) return alert('Ingrese bookId y userId');
    const newLoan: Loan = {
      id: crypto.randomUUID(),
      bookId,
      userId,
      loanDate: new Date(),
    };
    await addLoan(newLoan);
    setBookId('');
    setUserId('');
  };

  const handleReturn = async (id: string) => {
    await returnLoan(id);
  };

  return (
    <div >
      <h2>Listado de Prestamos</h2>

    <div >
        <input
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <input
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleAdd}> ➕ Add Loan</button>
      </div>

      {loans.length === 0 ? (
        <p>No hay préstamos registrados.</p>
      ) : (
        <ul>
          {loans.map((loan) => (
            <li key={loan.id}>
              <b>{loan.bookId}</b> prestado a <i>{loan.userId}</i>
              {loan.returnDate ? (
                <span> ✅ Devuelto ({loan.returnDate.toLocaleDateString()})</span>
              ) : (
                <button onClick={() => handleReturn(loan.id)}>🔁 Devolver</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

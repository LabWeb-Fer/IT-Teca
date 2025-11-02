import type { Loan } from '../../domain/entities/Loan';
import type { LoanRepository } from '../../domain/use-cases/loanBook/LoanRepository';

export class ApiLoanRepository implements LoanRepository {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  async addLoan(loan: Loan): Promise<Loan> {
    const response = await fetch(`${this.baseUrl}/loans`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: loan.userId,
        bookId: loan.bookId,
        loanDate: loan.loanDate.toISOString(),
        returnDate: loan.returnDate?.toISOString() || null,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Error adding loan' }));
      throw new Error(error.message || 'Error adding loan');
    }

    return await response.json(); 
  }


  async getAll(): Promise<Loan[]> {
    const response = await fetch(`${this.baseUrl}/loans`);
    if (!response.ok) throw new Error('Error fetching loans');
    return await response.json();
  }


  async getById(id: string): Promise<Loan | null> {
    const response = await fetch(`${this.baseUrl}/loans/${id}`);
    if (response.status === 404) return null;
    if (!response.ok) throw new Error('Error fetching loan');
    return await response.json();
  }

  async returnLoan(loanId: string, returnDate: Date): Promise<void> {
    const response = await fetch(`${this.baseUrl}/return`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        loanId, 
        returnDate: returnDate.toISOString() 
      }),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Error returning loan' }));
      throw new Error(error.message || 'Error returning loan');
    }
  }

  async clear(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/loans/clear`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error clearing loans');
  }
}

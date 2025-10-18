
import { Loan } from "../../entities/Loan";

export interface LoanRepository {
  save(loan: Loan): Promise<void>;
  findById(id: string): Promise<Loan | null>;
}

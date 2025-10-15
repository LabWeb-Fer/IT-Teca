export type UserRole = "admin" | "lector";

export class User {
  constructor(
    public readonly id: string,
    public email: string,
    public password: string,
    public role: UserRole
  ) {}
}

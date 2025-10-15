import { User,  type UserRole } from "../../entities/User";

import { type UserRepository } from "./UserRepository.ts";

interface RegisterUserRequest {
  email: string;
  password: string;
  role: UserRole;
}

export class RegisterUser {
  constructor(private userRepo: UserRepository) {}

  async execute(request: RegisterUserRequest): Promise<User> {
    const existing = await this.userRepo.findByEmail(request.email);
    if (existing) throw new Error("User already exists");

    const user = new User(
      crypto.randomUUID(),
      request.email,
      request.password, 
      request.role
    );

    await this.userRepo.save(user);
    return user;
  }
}

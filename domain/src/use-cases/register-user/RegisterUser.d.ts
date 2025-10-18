import { User, type UserRole } from "../../entities/User";
import { type UserRepository } from "./UserRepository.ts";
interface RegisterUserRequest {
    email: string;
    password: string;
    role: UserRole;
}
export declare class RegisterUser {
    private userRepo;
    constructor(userRepo: UserRepository);
    execute(request: RegisterUserRequest): Promise<User>;
}
export {};
//# sourceMappingURL=RegisterUser.d.ts.map
import { User } from "../../entities/User";
import {} from "./UserRepository.ts";
export class RegisterUser {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(request) {
        const existing = await this.userRepo.findByEmail(request.email);
        if (existing)
            throw new Error("User already exists");
        const user = new User(crypto.randomUUID(), request.email, request.password, request.role);
        await this.userRepo.save(user);
        return user;
    }
}
//# sourceMappingURL=RegisterUser.js.map
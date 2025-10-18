export type UserRole = "admin" | "lector";
export declare class User {
    readonly id: string;
    email: string;
    password: string;
    role: UserRole;
    constructor(id: string, email: string, password: string, role: UserRole);
}
//# sourceMappingURL=User.d.ts.map
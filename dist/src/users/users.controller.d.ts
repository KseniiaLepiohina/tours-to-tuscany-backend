import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(fullName: string, email: string, password: string): Promise<import("typeorm").InsertResult>;
    login(email: string, password: string): Promise<{
        id: number;
        fullName: string;
        email: string;
    }>;
    update(id: number, password: string): Promise<{
        message: string;
    }>;
}

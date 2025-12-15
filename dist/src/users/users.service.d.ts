import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    private readonly dataSource;
    constructor(userRepository: Repository<User>, dataSource: DataSource);
    createFromForm(fullName: string, email: string, password: string): Promise<import("typeorm").InsertResult>;
    updatePassword(id: number, password: string): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        id: number;
        fullName: string;
        email: string;
    }>;
}

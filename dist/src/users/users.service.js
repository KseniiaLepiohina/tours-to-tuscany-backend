"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    userRepository;
    dataSource;
    constructor(userRepository, dataSource) {
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async createFromForm(fullName, email, password) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = await this.dataSource
                .createQueryBuilder()
                .insert()
                .into(user_entity_1.User)
                .values({ fullName, email, password: hashedPassword })
                .execute();
            return newUser;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Failed with creating new user', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updatePassword(id, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await this.dataSource
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set({ password: hashedPassword })
                .where('id = :id', { id })
                .execute();
            if (result.affected === 0) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            return result && { message: 'Password successfully updated' };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to update password', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(email, password) {
        try {
            const user = await this.dataSource
                .getRepository(user_entity_1.User)
                .createQueryBuilder('user')
                .where('user.email = :email', { email })
                .getOne();
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
            const { password: _, ...result } = user;
            return result;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UsersService);
//# sourceMappingURL=users.service.js.map
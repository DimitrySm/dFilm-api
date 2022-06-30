import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async createUser(dto: CreateUserDto) {
        return await this.userRepository.create(dto);
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email }, include: { all: true } })
    }
}

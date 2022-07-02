import { UsersService } from "./users.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async user(@Request() req): Promise<any> {
        return req.user;
    }
}

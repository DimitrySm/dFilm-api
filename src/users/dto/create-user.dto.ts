import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'user@mail.ru', description: 'Email' })
    @IsString({ message: 'Must be string' })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;
    
    @ApiProperty({ example: '12345', description: 'Password' })
    @IsString({ message: 'Must be string' })
    @Length(4, 16, { message: 'Must be not less than 4 and not more than 16' })
    readonly password: string;
}

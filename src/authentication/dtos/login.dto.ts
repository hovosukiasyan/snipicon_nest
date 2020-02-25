// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { IsEmail, IsAlphanumeric } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsAlphanumeric()
    password: string;
}

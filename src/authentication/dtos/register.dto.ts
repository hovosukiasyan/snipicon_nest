import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsAlphanumeric, IsNotEmpty, MinLength} from 'class-validator';
import {Column} from "typeorm";

export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsAlphanumeric()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: ["1", "0"],
        default: ["0"]
    })
    type:number;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: ["developer", "user"],
        default: ["user"]
    })
    role:string;

    @ApiProperty()
    @Column({
        default: Math.random() * 10000
    })
    socialId:number;
}

import {Body, Controller, Post, Req} from '@nestjs/common';
import {ApiCreatedResponse, ApiParam, ApiTags} from "@nestjs/swagger";
import {AuthenticationService} from "./authentication.service";
import {RegisterDto} from "./dtos/register.dto";
import {LoginDto} from "./dtos/login.dto";

@ApiTags('Authentication')
@Controller('api')
export class AuthenticationController {
    constructor(private service: AuthenticationService) { }

    @Post('/login')
    async login(@Body() body: LoginDto) {
        return this.service.login(body);
    }

    @Post('/register')
    @ApiCreatedResponse({
        description: 'You have successfuly signed up.',
    })
    async signup(@Body() body: RegisterDto) {
        return await this.service.register(body);
    }
}

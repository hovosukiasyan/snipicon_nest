import {Injectable} from '@nestjs/common';
import {LoginDto} from "./dtos/login.dto";
import {RegisterDto} from "./dtos/register.dto";

@Injectable()
export class AuthenticationService {

    async login(req) {
        console.log(req.body);
        // await this.LoginDto.save(login);
    }

    async register(register) {
        console.log(register)
        // await this.CreateRegisterDto.save(register);
    }



}

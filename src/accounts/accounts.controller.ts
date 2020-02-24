import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {AccountsService} from "./accounts.service";
import {Account} from "./account.entity";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
    constructor(private service: AccountsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAccount(params.id);
    }

    @Post()
    create(@Body() account: Account) {
        return this.service.createAccount(account);
    }

    // @Put()
    // update(@Body() account: Account) {
    //     return this.service.updateTag(account);
    // }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteAccount(params.id);
    }
}

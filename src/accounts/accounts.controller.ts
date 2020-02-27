import {Body, Controller, Delete, Get, Param, Post, Query, HttpException, HttpStatus, Put} from '@nestjs/common';
import {AccountsService} from "./accounts.service";
import {Account} from "./account.entity";
import {ApiTags, ApiResponse, ApiQuery, ApiParam} from "@nestjs/swagger";
import { AccountType } from './enum/accountType';

@ApiTags('Accounts')
@Controller('api')
export class AccountsController {
    constructor(private service: AccountsService) { }

    @Get('/accounts')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'organisation_name',required:false})

    getAll(@Query('organisation_name') organisation_name) {
        return this.service.getAccounts(organisation_name);
    }

    @Get('account/:id')
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Account Name' })
    async get(@Param('id') id:number) {
        const account = await this.service.findById(id);

        if (!account) {
            throw new HttpException(`Account with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        
        return this.service.getAccount(id);
    }

    @Post('account')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'organisation_name',required:true})
    @ApiQuery({ name: 'organisation_id',required:true})
    @ApiQuery({ name: 'owner_id',required:true})
    @ApiQuery({ name: 'account_balance',required:true})
    @ApiQuery({ name: 'account_type',required:true, enum: AccountType})
    
    
    async create(
        @Query('organisation_name') organisation_name: string, 
        @Query('organisation_id') organisation_id: number, 
        @Query('owner_id') owner_id: number,
        @Query('account_balance') account_balance: number,
        @Query('account_type') account_type: string, 
        account: Account
        ) {
        const accountCheck = await this.service.findAccount(organisation_name);
        if (accountCheck) {
            throw new HttpException(`Account with organization name ${organisation_name} already exist`, HttpStatus.CONFLICT);
        }

        return this.service.createAccount(account_type,account_balance,owner_id,organisation_id,organisation_name,account);
    }

    @Put('account/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    @ApiQuery({ name: 'organisation_name',required:true})
    @ApiQuery({ name: 'organisation_id',required:true})
    @ApiQuery({ name: 'owner_id',required:true})
    @ApiQuery({ name: 'account_balance',required:true})
    @ApiQuery({ name: 'account_type',required:true, enum: AccountType})
    async update(
            @Param('id') id: number,
            @Query('organisation_name') organisation_name: string,
            @Query('organisation_id') organisation_id: number,
            @Query('owner_id') owner_id: number,
            @Query('account_balance') account_balance: number,
            @Query('account_type') account_type: string,
            account: Account
            ) {
            const idCheck = await this.service.findById(id);
            if (!idCheck) {
                throw new HttpException(`Account with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
            }
        return this.service.updateAccount(id,account_type,account_balance,owner_id,organisation_id,organisation_name, account);
    }

    @Delete('account/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    async delete(@Param('id') id:number) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Account with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        return this.service.deleteAccount(id);
    }
}

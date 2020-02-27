import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Account} from "./account.entity";
import {Repository, Like} from "typeorm";
import { json } from 'express';

@Injectable()
export class AccountsService {
    constructor(@InjectRepository(Account) private accountsRepository: Repository<Account>) { }

    async findAccount(organisation_name: string): Promise<Account> {
        const account = await this.accountsRepository.findOne({ organisation_name });
        return new Promise(resolve => {
            resolve(account);
        });
    }

    async findById(id: number): Promise<Account> {
       const account =  await this.accountsRepository.findOne({id});
        return new Promise(resolve => {
            resolve(account);
        });
    }

    async getAccounts(organisation_name: string): Promise<Account[]> {
        if (organisation_name){
            return await this.accountsRepository.find({
                where: [{ organisation_name: Like(`%${organisation_name}%`) } ],
            })
        }else{
            return await this.accountsRepository.find();
        }

    }

    async getAccount(id: number): Promise<Account> {
        return await this.accountsRepository.findOne(id);

    }

    async createAccount(
        account_type:string, 
        account_balance: number,
        owner_id: number,
        organisation_id: number,
        organisation_name: string,
        account: Account) {
        const new_account = new Account;
        new_account.account_type = account_type;
        new_account.account_balance = account_balance;
        new_account.owner_id = owner_id;
        new_account.organisation_id = organisation_id;
        new_account.organisation_name = organisation_name;
        return await this.accountsRepository.save(new_account);
    }

    async updateAccount(
        id:number,
        account_type:string, 
        account_balance: number,
        owner_id: number,
        organisation_id: number,
        organisation_name: string,
        account: Account) {
        this.accountsRepository.update({id:id}, {
            account_type:account_type,
            account_balance:account_balance,
            owner_id:owner_id,
            organisation_id:organisation_id,
            organisation_name:organisation_name
        });
        return await this.accountsRepository.find({id});
    }

    async deleteAccount(id:number) {
        this.accountsRepository.delete(id);
        return await "SUCCESS!!! Account is Deleted";
    }
}

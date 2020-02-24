import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Account} from "../accounts/account.entity";
import {Repository} from "typeorm";

@Injectable()
export class AccountsService {
    constructor(@InjectRepository(Account) private accountsRepository: Repository<Account>) { }

    async getAccount(id: number): Promise<Account[]> {
        return await this.accountsRepository.find({
            select: ["account_type"],
            where: [{ "id": id }]
        });
    }

    async createAccount(account: Account) {
        this.accountsRepository.save(account);
    }

    // async updateAccount(account: Account) {
    //     this.accountsRepository.save(account)
    // }

    async deleteAccount(account: Account) {
        this.accountsRepository.delete(account);
    }
}

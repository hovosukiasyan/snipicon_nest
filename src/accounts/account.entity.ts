import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('accounts')
export class Account {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: ["dev", "free"],
        default: "free"
    })
    account_type:string;

    @ApiProperty()
    @Column("decimal", { precision: 8, scale: 2 })
    account_balance: number;

    @ApiProperty()
    @Column()
    owner_id: number;

    @ApiProperty()
    @Column()
    organisation_id: number;

    @ApiProperty()
    @Column({ length: 50})
    organisation_name:string;


    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}
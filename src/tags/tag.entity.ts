import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";


@Entity('tags')
export class Tag {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 50, unique: true })
    name:string;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;

    @ApiProperty()
    @Column({default: false})
    is_deleted:boolean;
}
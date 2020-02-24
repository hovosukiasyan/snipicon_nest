import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";


@Entity('tags')
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 255, unique: true })
    name:string;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;

    @Column({default: false})
    is_deleted:boolean;
}
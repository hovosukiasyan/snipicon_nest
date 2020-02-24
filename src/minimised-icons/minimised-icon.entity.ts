import {ApiProperty} from "@nestjs/swagger";
import {Column, PrimaryGeneratedColumn} from "typeorm";

export class MinimisedIcon {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("longtext")
    source_svg: string;

    @ApiProperty()
    @Column()
    owner_id: number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}

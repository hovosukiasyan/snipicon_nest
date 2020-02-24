import { ApiProperty } from "@nestjs/swagger";
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('normalised_icons')
export class NormalisedIcon {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("longtext")
    source_svg: string;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}

import {ApiProperty} from "@nestjs/swagger";
import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity('minimised_icons')
export class MinimisedIcon {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("longtext")
    source_svg: string;

    @ApiProperty()
    @Column()
    source_id: number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}

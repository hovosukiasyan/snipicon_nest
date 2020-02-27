import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('filters')
export class Filter {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    icon_id: number;

    @ApiProperty()
    @Column()
    xml_filter_id: number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}

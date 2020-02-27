import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('xml_gradient')
export class XmlGradient {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 255 })
    gradient: string;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}

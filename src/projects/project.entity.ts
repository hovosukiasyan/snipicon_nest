import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('projects')
export class Project {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 255, unique: true })
    name:string;

    @ApiProperty()
    @Column()
    owner_id: number;

    @ApiProperty()
    @Column()
    project_palette_id: number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;
}
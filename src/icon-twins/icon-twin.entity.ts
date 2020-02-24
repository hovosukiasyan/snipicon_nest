import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('icon_twins')
export class IconTwin {

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
    @Column({
        type: "enum",
        enum: ["12", "24", "48"],
    })
    grid_size:number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;

    @ApiProperty()
    @Column({default: false})
    is_deleted:boolean;
}
export class DesignerCollectionEntity {}
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity('designer_collection')
export class DesignerCollection {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 100})
    name:string;

    @ApiProperty()
    @Column()
    state:boolean;

    @ApiProperty()
    @Column({ length: 100})
    license_type:string;

    @ApiProperty()
    @Column()
    owner_id: number;

    @Column({ name: 'created_at', default: () => `now()`, nullable: false })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
    updateTime: Date;

    @ApiProperty()
    @Column({default: false})
    is_deleted:boolean;
}

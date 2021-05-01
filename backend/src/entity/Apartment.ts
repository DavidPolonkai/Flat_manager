import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Owner } from "./Owner";

@Entity()
export class Apartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'int' })
    floor: number;

    @Column({ nullable: false, type: 'int' })
    door: number;

    @Column({ nullable: false, type: 'float' })
    area: number;

    @Column({nullable: false, type: 'float'})
    volume: number;

    @OneToMany(type => Owner, owner => owner.apartment)
    owner: Owner[];


}
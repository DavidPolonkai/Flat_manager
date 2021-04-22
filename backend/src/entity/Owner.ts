import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Apartment } from "./Apartment";
import { Log } from "./Log";

@Entity()
export class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'text' })
    name: string;

    @Column({ nullable: false, type: 'boolean' })
    active: boolean;

    @Column({ nullable: false, type: 'float', precision: 12, scale: 2})
    balance: number;

    @ManyToOne(type => Apartment, {
        eager: true,
        cascade: true
    })
    apartment: Apartment;

    @OneToMany(type => Log, log => log.owner)
    log: Log[];

}
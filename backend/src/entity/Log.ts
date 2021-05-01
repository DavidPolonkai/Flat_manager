import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Owner } from "./Owner";

@Entity()
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'date' })
    date: Date;

    @Column({ nullable: false, type: 'float' })
    sum: number;
    //if sum + it is deposit to the owners account
    //if sum - it is paying

    @Column({ nullable: false, type: 'float' })
    actual_balance: number;

    @Column({ nullable: true, type: 'text' })
    comment: string;

    @ManyToOne(type => Owner, {
        eager: true,
        cascade: true
    })
    owner: Owner;
}
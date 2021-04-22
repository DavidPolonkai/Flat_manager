import { Owner } from "./Owner";

export interface Log {
    id: number;
    date: Date;
    sum: number;
    actual_balance: number;
    comment: string;
    owner: Owner;
}

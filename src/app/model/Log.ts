import { Owner } from "./Owner";

export interface Log {
    id: number;
    date: string;
    sum: number;
    actual_balance: number;
    comment: string;
    owner: Owner;
}

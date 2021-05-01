import { Owner } from "./Owner";

export interface SumReport{
    owner: Owner,
    openBalance: number,
    deposits: number,
    expenses: number,
    closeBalance: number
}
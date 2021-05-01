import { DebitType } from './DebitType';

export interface Debit {
    id: number,
    date: Date,
    sum: number,
    comment: string,
    type: DebitType
}
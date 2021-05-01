import { Apartment } from './Apartment';

export interface Owner{
    id: number;
    name: string;
    active: boolean;
    balance: number;
    apartment: Apartment;
}
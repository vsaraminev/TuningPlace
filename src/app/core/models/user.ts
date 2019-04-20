import { Part } from './part';

export interface User {
    _id: string,
    name: string,
    email: string,
    avatar: string,
    price : number,
    parts: Part[]
}
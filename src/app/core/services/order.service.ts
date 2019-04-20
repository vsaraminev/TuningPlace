import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const userBuyPart = 'http://localhost:5000/order/add/';
const getUserParts = 'http://localhost:5000/order/user';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor(private http: HttpClient) { }

    userBuyPart(partId: string) {
        return this.http.post(userBuyPart + partId, {});
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(getUserParts);
    }
}
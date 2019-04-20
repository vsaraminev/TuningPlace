import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  userOrders$: Observable<Order[]>
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.userOrders$ = this.orderService.getOrders();
    console.log(this.orderService.getOrders());
  }
}

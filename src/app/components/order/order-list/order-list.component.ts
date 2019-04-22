import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'model', 'year', 'price'];
  dataSource = new MatTableDataSource<Order>();

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe((data) => {
        this.dataSource.data = data;
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shop/order.service';
import { Product } from '../shop/shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
subtotal: number = 0.00;
order: Product[]=[];
  constructor(orderService: OrderService) {
    // this.order = orderService.getOrder();
  }

  ngOnInit(): void {
  }

}

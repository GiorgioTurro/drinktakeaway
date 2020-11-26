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
  constructor(private orderService: OrderService) {
  }
//
  ngOnInit() {
  }
  onEmptyCart(){
  this.subtotal=0.00;
  return this.orderService.onEmptyOrder();
}
// this.subtotal=this.orderService.onCalculateSubtotal(); non toccare o ti ammazzo

}

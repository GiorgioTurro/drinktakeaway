import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shop/order.service';
import { Product } from '../shop/shared/product.model';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
discount: string ="";

  constructor(public orderService: OrderService) {
  }
//
  ngOnInit() {
  }
  onEmptyCart(){
  return this.orderService.onEmptyOrder();
  }

  onRemoveProduct(p: Product){
    return this.orderService.removeFromOrder(p);
  }

}

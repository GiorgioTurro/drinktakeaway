import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Shop } from '../shop.model';
import { TableModule } from 'primeng/table';
import { Product } from '../shared/product.model';
import { OrderService } from "../order.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Product [] = [];

  constructor(public menuService: MenuService, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  decreaseAmount(p:Product){
    return this.orderService.reduceFromOrder(p);
  }

  increaseAmount(p:Product){
    p.quantity=p.quantity+1;
    return this.onAddToOrder(p);
  }

  onAddToOrder(p: Product){
    return this.orderService.onAddProduct(p);
  }

}

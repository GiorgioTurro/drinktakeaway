import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
menu: Product [] = [];
  constructor() { }





  showMenu(menu: Product[]){
    this.menu=[];
    for(let p of menu){
      this.menu.push(p);
    }
  }

}

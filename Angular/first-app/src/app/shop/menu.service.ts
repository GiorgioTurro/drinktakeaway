import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
menu: Product [] = [];
shopName: string="";
  constructor() { }


showName(name: string){
  this.shopName=name;
}


  showMenu(menu: Product[]){
    this.menu=[];
    for(let p of menu){
      this.menu.push(p);
    }
  }

}

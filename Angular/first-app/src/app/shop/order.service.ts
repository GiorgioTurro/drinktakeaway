import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
order: Product[]=[];
product1: Product;
subtotal: number=0;

getOrder(){
  return this.order;
}

onAddProduct(p: Product){
  this.subtotal=0;
   let exist=0;
  for(let prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.description==p.description && prod.category==p.category){
      exist=1;
      prod.quantity++;
      console.log(this.order);
    }
  }
  if(exist===0){
    this.product1 = new Product(p.name, p.price, p.description, p.category);
    this.product1.quantity=p.quantity;
    this.order.push(this.product1);
    console.log(this.order);
  }
  for(var prod of this.order){
      this.subtotal=this.subtotal+(prod.quantity*prod.price)
    }
  console.log(this.subtotal);
  p.quantity=0;
}

onEmptyOrder(){
  this.order=[];
  this.subtotal=0.00;
  console.log(this.subtotal);
  console.log(this.order);
}

reduceFromOrder(p: Product){
  for(let prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.description==p.description && prod.category==p.category){
      if(prod.quantity==1){
        this.removeFromOrder(prod);
      }else{
        prod.quantity--;
        this.subtotal=this.subtotal-prod.price;
      }
      console.log(this.order);
    }
  }
}

removeFromOrder(p: Product){
  this.subtotal=this.subtotal-(p.quantity*p.price);
  this.order = this.order.filter(obj => obj !== p);
}

}

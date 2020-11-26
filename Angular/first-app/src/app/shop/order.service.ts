import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
order: Product[]=[];
product1: Product;

getOrder(){
  return this.order;
}

onAddProduct(p: Product){
   let exist=0;
  for(let prod of this.order){
    if(prod.name==p.name && prod.price==p.price && prod.description==p.description && prod.category==p.category){
      exist=1;
      this.product1 = new Product(p.name, p.price, p.description, p.category);
      this.product1.quantity=p.quantity;
      prod.quantity=this.product1.quantity;
      console.log(this.order);
    }
  }
  if(exist===0){
    this.product1 = new Product(p.name, p.price, p.description, p.category);
    this.product1.quantity=p.quantity;
    this.order.push(this.product1);
    console.log(this.order);
  }
  p.quantity=0;
}

onEmptyOrder(){
  this.order=[];
  console.log(this.order);
}

onCalculateSubtotal(){
  let subtotal = 0.00;
  for(var prod of this.order){
    subtotal=subtotal+(prod.quantity*prod.price)
  }
  console.log(subtotal);
  return subtotal;
}

}

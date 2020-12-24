import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from '../shop/order.service';
import { Product } from '../shop/shared/product.model';
import { ButtonModule } from 'primeng/button';
declare var paypal;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
discount: string ="";
paidFor = false;
  constructor(public orderService: OrderService) {
  }
//
  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.orderService.order[0].description,
              amount: {
                currency_code: 'EUR',
                value: this.orderService.order[0].price
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor=true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }
  onEmptyCart(){
  return this.orderService.onEmptyOrder();
  }

  onRemoveProduct(p: Product){
    return this.orderService.removeFromOrder(p);
  }

}

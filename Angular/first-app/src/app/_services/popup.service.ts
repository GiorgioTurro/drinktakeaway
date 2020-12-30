import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';
import { OrderService } from './order.service';
import { MenuService } from './menu.service';
import { ShowService } from './show.service';



@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private orderService: OrderService, private menuService: MenuService, public showService: ShowService) { }

  makeLocalePopup(data: any): string {


    return `` +
      `<div> Nome: ${ data.name }</div>` +
      `<div> Tipo: ${ data.type }</div>` +
      `<div> Indirizzo: ${ data.address } </div>`
  }
}

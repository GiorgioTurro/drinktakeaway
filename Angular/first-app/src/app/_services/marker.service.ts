import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';
import * as L from 'leaflet'
import { OrderService } from './order.service';
import { MenuService } from './menu.service';
import { ShowService } from './show.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient, private popupService: PopUpService, private orderService: OrderService, private menuService: MenuService, public showService: ShowService) { }

  makeLocalsMarkers(map: L.map): void {
    var beerIcon = L.icon({
    iconUrl: '/assets/images/favicon.png',
    iconSize:     [30, 30]
  });
    this.http.get('http://127.0.0.1:1111/api/v1/getAllLocals').subscribe((res: any) => {
      for (const c of res) {
        this.http.get('http://127.0.0.1:1111/api/v1/getDrinkQuantityToDo/' + c.id).subscribe((drinkNumber:any) => {
          const lat = c.lat;
          const lon = c.lon;
          const marker = L.marker([lat,lon], {icon: beerIcon, title:c.name});
          marker.bindPopup(this.popupService.makeLocalePopup(c, drinkNumber)).on("click", e => {
            let shops = this.menuService.getShops();
            for (const shop of shops){
              console.log(shop.name);
              console.log(e.sourceTarget.options.title)
              if (shop.name == e.sourceTarget.options.title){
                this.menuService.showName(shop.name);
                this.menuService.showMenu(shop.menu);
                this.orderService.onEmptyOrder();
                this.showService.toggleMenuComponent(shop.name);
              }
            }
          }).addTo(map);
        });
      }
    });
  }

}

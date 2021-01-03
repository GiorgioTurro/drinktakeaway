import { Component, AfterViewInit } from '@angular/core';
import { Shop } from './shop.model';
import { TableModule } from 'primeng/table';
import { Product } from '../shared/product.model';
import { OrderService } from '../_services/order.service';
import { MenuService } from '../_services/menu.service';
import { ShowService } from '../_services/show.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewInit {
shops: Shop[] = [];
selectedShop: Shop;
menu: Product[];
menu2: Product[];
show: boolean=false;
  constructor(private http: HttpClient, private orderService: OrderService, private menuService: MenuService, public showService: ShowService) { }

  ngAfterViewInit(): void {
    //this.shops = [];
    this.menu=[]
    this.menu2=[
      new Product('4 Luppoli', 3.00, 'Birra')
    ]
    this.http.get('http://127.0.0.1:1111/api/v1/locale').subscribe((res: any) => {
      for (const c of res) {
        let nameString = c.name;
        let newString = nameString.replace(" ", "%20");
        let urlFirstPart = 'http://127.0.0.1:1111/api/v1/menu?nameLocale=';
        let menuUrl = urlFirstPart.concat(newString);
        let menu3 = []
        this.http.get(menuUrl).subscribe((resMenu:any) => {
          console.log(resMenu)
          for (const menuElement of resMenu) {
            menu3.push(new Product(menuElement.bevanda.name, menuElement.price, menuElement.bevanda.type))
          }
          var shop = new Shop(c.name, c.address, menu3);
          this.shops.push(shop);
        });
      }
      this.selectedShop=this.shops[0];
      this.menuService.setShops(this.shops);
    });

  }

  onAddToOrder(p: Product){
    return this.orderService.onAddProduct(p);
  }
  onPassShopName(shopName: string){
    return this.menuService.showName(shopName);
  }
  onShowMenu(shop: Shop){
    return this.menuService.showMenu(shop.menu);
  }

  toggleMenu(shop: string){
    this.orderService.onEmptyOrder();
    console.log("orderService empty called");
    return this.showService.toggleMenuComponent(shop);
  }


}

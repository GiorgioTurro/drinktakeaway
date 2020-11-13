import { Component, OnInit } from '@angular/core';
import { Shop } from './shop.model';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops: Shop[];
selectedShop: Shop;

  constructor() { }

  ngOnInit() {
    this.shops=[
      new Shop('Jumping', 'Via Roma, 102', 'Torino'),
      new Shop('Giorgi8', 'Via Giorgione, 59', 'Torino'),
      new Shop('Paradiso Brugola', 'Piazza delle Armi, 3', 'Torino'),
      new Shop('Shot', 'Via Gianfrancesco Bellezia, 15', 'Torino'),
      new Shop('Birbe di Pollo Store', 'Via Dei Polli, 13', 'Torino'),
      new Shop('Un Altro', 'Viale Altrove, 99', 'Torino')
    ];
    console.log(this.shops);
  }

}

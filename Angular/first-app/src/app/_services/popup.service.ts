import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';




@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeLocalePopup(data: any, drinkNumber: number): string {
    let crowdValue = "Basso";
    if (drinkNumber > 25){
      crowdValue = "Elevato"
    }else if (drinkNumber > 10){
      crowdValue = "Medio"
    }
    return `` +
      `<div> Nome: ${ data.name }</div>` +
      `<div> Tipo: ${ data.type }</div>` +
      `<div> Indirizzo: ${ data.address } </div>` +
      `<div> Affollamento: ${ crowdValue } </div>`
  }
}

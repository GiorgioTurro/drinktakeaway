import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';




@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeLocalePopup(data: any): string {

    return `` +
      `<div> Nome: ${ data.name }</div>` +
      `<div> Tipo: ${ data.type }</div>` +
      `<div> Indirizzo: ${ data.address } </div>`
  }
}

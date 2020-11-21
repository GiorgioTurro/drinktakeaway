import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return '' +
      '<div> Nome: ${ data.name }</div>' +
      '<div> Tipo: ${ data.type }</div>'
  }
}

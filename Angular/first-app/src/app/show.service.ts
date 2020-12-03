import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
show: boolean = false;
  constructor() { }
  toggleMenuComponent(){
    this.show=!this.show;
  }
}

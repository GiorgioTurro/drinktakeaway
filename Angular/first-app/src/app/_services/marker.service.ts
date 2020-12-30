import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';
import * as L from 'leaflet'


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient, private popupService: PopUpService) { }


  // makeCapitalMarkers(map: L.map): void {
  //   var beerIcon = L.icon({
  //   iconUrl: '/assets/images/favicon.png',
  //   iconSize:     [30, 30]
  // });
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lat = c.geometry.coordinates[0];
  //       const lon = c.geometry.coordinates[1];
  //       const marker = L.marker([lon, lat], {icon: beerIcon});
  //       marker.bindPopup(this.popupService.makeCapitalPopup(c)).addTo(map);
  //     }
  //   });
  // }

  makeLocalsMarkers(map: L.map): void {
    var beerIcon = L.icon({
    iconUrl: '/assets/images/favicon.png',
    iconSize:     [30, 30]
  });
    this.http.get('http://127.0.0.1:1111/api/v1/locale').subscribe((res: any) => {
      for (const c of res) {
        console.log(c)
        const lat = c.lat;
        const lon = c.lon;
        const marker = L.marker([lat,lon], {icon: beerIcon});
        marker.bindPopup(this.popupService.makeLocalePopup(c)).addTo(map);
      }
    });
  }

}

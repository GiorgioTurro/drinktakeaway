import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './popup.service';
import * as L from 'leaflet'


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/locali.geojson';
  constructor(private http: HttpClient, private popupService: PopUpService) { }

  makeCapitalMarkers(map: L.map): void {
    var beerIcon = L.icon({
    iconUrl: '/assets/images/favicon.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat], {icon: beerIcon});
        marker.bindPopup(this.popupService.makeCapitalPopup(c)).addTo(map);
      }
    });
  }

}

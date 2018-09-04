import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MapEvent} from './map-content/classes/MapEvent';
import {Observable, of} from 'rxjs';
import {EVENTS} from './map-content/testEvents';
import {LatLngDate} from './map-content/classes/LatLngDate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MapEventService {
  private url = 'api/knownEvents';
  getEvents(): Observable<MapEvent[]> {
    return this.http.get<MapEvent[]>(this.url);
    // of(KNOWN)
  }
  constructor( private http: HttpClient) { }
  addMapEvent(mapEvent: MapEvent): Observable<MapEvent> {
    return this.http.post<MapEvent>(this.url, mapEvent, httpOptions);
  }
  getLocalEvents(northEast: LatLngDate, southWest: LatLngDate ): Observable<Array<MapEvent>> {
   // this.http.get<MapEvent[]>('${this.url}/lat<=${northEast.lat}&&lng<={northEast.lng}&&lat>=${southWest.lat}&&lng>=${southWest.lng}');
    let local: Array<MapEvent> = [];
    console.log( '1');
    EVENTS.forEach(ev => {
      console.log( '2: lon ev : ' + ev.longitude + ' lat: ' + ev.latitude);
      console.log( '2: lon: ' + southWest.lng + ' lat: ' + northEast.lng);
      if (ev.longitude <= southWest.lng && ev.longitude <= northEast.lng ) {
        console.log( '3');
         if (ev.latitude >= southWest.lat && ev.latitude >= northEast.lat ) {
           console.log( '4');
            local.push(ev);
         }
      }
    });
    return of(local);
  }
}

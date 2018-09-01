import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MapEvent} from './map-content/classes/MapEvent';
import {Observable} from 'rxjs';

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
}

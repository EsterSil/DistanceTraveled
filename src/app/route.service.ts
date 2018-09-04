import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Route} from './map-content/classes/Route';
import {ROUTES} from './map-content/testRoute';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private url = 'api/knownEvents';
  getResentRoutes(): Observable<Route[]> {
    // return this.http.get<Route[]>(this.url);
     return of(ROUTES);
  }
  constructor( private http: HttpClient) { }
}

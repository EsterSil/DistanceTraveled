import {Component, ElementRef, Input, OnInit, AfterViewInit} from '@angular/core';
import {
  AgmMap,
  AgmMarker,
  AgmPolyline,
  GoogleMapsAPIWrapper,
  InfoWindowManager, LatLngBounds,
  LatLngLiteral,
  MarkerManager,
  PolylineManager
} from '@agm/core';
import {ROUTES} from './testRoute';
import {EVENTS} from './testEvents';
import {AgmInfoWindow} from '@agm/core';
import {MarkerRoute} from './classes/MarkerRoute';
import {PolylineService} from './servises/PolylineService';
import {MarkerService} from './servises/MarkerService';
import {WindowService} from './servises/WindowService';
import {RouteInfoService} from './routeInfo/routeInfoService';
import {MapEvent} from './classes/MapEvent';
import {EventService} from './servises/EventService';
import {async} from 'q';
import {RouteService} from '../route.service';
import {MapComponent} from '../map/map.component';
import {LatLngDate} from './classes/LatLngDate';
import {MapEventService} from '../map-event.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-map-content',
  template: ''
})
export class MapContentComponent implements OnInit {
  constructor(public mapApiWrapper: GoogleMapsAPIWrapper,
              public polilineManager: PolylineManager,
              public markerManager: MarkerManager,
              public infoWindowsManager: InfoWindowManager,
              private routeService: RouteService,
              private mapEventService: MapEventService ) {
  }
  @Input() currentBounds: LatLngDate[];
  localEvents: Array<MapEvent> = [];
  polylineServices = new PolylineService();
  windowServices = new WindowService();
  markerServices = new MarkerService();
  routeInfoService = new RouteInfoService(this.mapApiWrapper);

  ngOnInit() {
     this.addContentOnMap();
     this.addLocalEventsOnMap();
  }
  public getLocalEvents(northEast: LatLngDate, southWest: LatLngDate) {
    this.currentBounds = [northEast, southWest];
    this.mapEventService.getLocalEvents(northEast, southWest).subscribe( events => this.localEvents = events);
    console.log(' got it ' + this.localEvents.length );
    console.log(' NE: ' + northEast.lat + ' ' + northEast.lng);
    console.log(' SW: ' + southWest.lat + ' ' + southWest.lng);
  }
  public addLocalEventsOnMap() {
    if (this.localEvents.length > 0) {
      this.markerServices.addAllEventMarkersOnMap(this.markerManager, EVENTS); // this.localEvents);
    }
  }
  public addNewEventOnMap(mapEvent: MapEvent) {
    this.markerServices.addEventMarkerOnMap(this.markerManager, mapEvent);
  }

  async addContentOnMap() {
    for (let i = 0; i < ROUTES.length; i++) {
      await this.routeInfoService.countDistance(ROUTES[i]);
      this.routeInfoService.countDuration(ROUTES[i]);
      const coordinate: Array<LatLngLiteral> = ROUTES[i].route;

      const agmPoliline = this.polylineServices.addPolilaneOnMap(this.polilineManager, {
        path: coordinate,
        strokeColor: 'black'
      });
      this.polilineManager.createEventObservable('click', agmPoliline).subscribe(() => this.clickPolyline(agmPoliline));
      this.polylineServices.addRoute(agmPoliline);

      const markerA = this.markerServices.addMarkerOnMap(this.markerManager, coordinate[0]);
      const markerB = this.markerServices.addMarkerOnMap(this.markerManager, coordinate[coordinate.length - 1]);
      this.markerManager.createEventObservable('click', markerA).subscribe(() => this.clickMarker(markerA, startInfoWin));
      this.markerManager.createEventObservable('click', markerB).subscribe(() => this.clickMarker(markerB, endInfoWin));


      this.markerServices.addMarkerRoute(new MarkerRoute(agmPoliline, markerA, markerB));

      const startInfoWin: AgmInfoWindow = this.windowServices.addInfoWindowOnMap(this.infoWindowsManager, {
        position: coordinate[0],
        content: 'Distance: ' + ROUTES[i].distance.toFixed(2) + ' km. \n' + 'Duration: ' + ROUTES[i].duration
      });
      const endInfoWin: AgmInfoWindow = this.windowServices.addInfoWindowOnMap(this.infoWindowsManager, {
        position: coordinate[coordinate.length - 1],
        content: 'Distance: ' + ROUTES[i].distance.toFixed(2) + ' km. \n' + 'Duration: ' + ROUTES[i].duration
      });

      this.windowServices.addInfoWindow(startInfoWin);
      this.windowServices.addInfoWindow(endInfoWin);
    }
  }

  clickMarker(marker: AgmMarker, windows: AgmInfoWindow) {
    this.windowServices.openInfoWIndows(windows);
    this.markerServices.getAllMarker().filter((markerRoute) =>
      markerRoute.startPointMarker.id() === marker.id() || markerRoute.endPointMarker.id() === marker.id())
      .forEach((route) => {
        this.polylineServices.unfocusedPolilanes(this.polilineManager);
        this.windowServices.closeAllInfoWindows();
        this.polylineServices.focucedPolylane(this.polilineManager, route.route);
      });
  }

  clickPolyline(polyline: AgmPolyline) {
    this.windowServices.closeAllInfoWindows();
    this.polylineServices.unfocusedPolilanes(this.polilineManager);
    this.polylineServices.focucedPolylane(this.polilineManager, polyline);
  }


}



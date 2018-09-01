import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {
  AgmMap,
  AgmMarker,
  AgmPolyline,
  GoogleMapsAPIWrapper,
  InfoWindowManager,
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

@Component({
  selector: 'app-map-content',
  template: ''
})
export class MapContentComponent implements OnInit {
  constructor(public mapApiWrapper: GoogleMapsAPIWrapper,
              public polilineManager: PolylineManager,
              public markerManager: MarkerManager,
              public infoWindowsManager: InfoWindowManager) {
  }

  polylineServices = new PolylineService();
  windowServices = new WindowService();
  markerServices = new MarkerService();
  routeInfoService = new RouteInfoService(this.mapApiWrapper);

  @Input() localEvent: MapEvent;
  ngOnInit() {
    // this.addContentOnMap();
    this.addLocalEventsOnMap();
  }
  private addLocalEventsOnMap() {
    this.markerServices.addAllEventMarkersOnMap(this.markerManager, EVENTS);
  }
  public addNewEventOnMap(mapEvent: MapEvent) {
    this.markerServices.addEventMarkerOnMap(this.markerManager, mapEvent);
  }

  async addContentOnMap() {
    for (let i = 0; i < ROUTES.routes.length; i++) {
      await this.routeInfoService.countDistance(ROUTES.routes[i]);
      this.routeInfoService.countDuration(ROUTES.routes[i]);
      const coordinate: Array<LatLngLiteral> = ROUTES.routes[i].route;

      let agmPoliline = this.polylineServices.addPolilaneOnMap(this.polilineManager, {
        path: coordinate,
        strokeColor: 'black'
      });
      this.polilineManager.createEventObservable('click', agmPoliline).subscribe(() => this.clickPolyline(agmPoliline));
      this.polylineServices.addRoute(agmPoliline);

      let markerA = this.markerServices.addMarkerOnMap(this.markerManager, coordinate[0]);
      let markerB = this.markerServices.addMarkerOnMap(this.markerManager, coordinate[coordinate.length - 1]);
      this.markerManager.createEventObservable('click', markerA).subscribe(() => this.clickMarker(markerA, startInfoWin));
      this.markerManager.createEventObservable('click', markerB).subscribe(() => this.clickMarker(markerB, endInfoWin));


      this.markerServices.addMarkerRoute(new MarkerRoute(agmPoliline, markerA, markerB));

      let startInfoWin: AgmInfoWindow = this.windowServices.addInfoWindowOnMap(this.infoWindowsManager, {
        position: coordinate[0],
        content: 'Distance: ' + ROUTES.routes[i].distance.toFixed(2) + ' km. \n' + 'Duration: ' + ROUTES.routes[i].duration
      });
      let endInfoWin: AgmInfoWindow = this.windowServices.addInfoWindowOnMap(this.infoWindowsManager, {
        position: coordinate[coordinate.length - 1],
        content: 'Distance: ' + ROUTES.routes[i].distance.toFixed(2) + ' km. \n' + 'Duration: ' + ROUTES.routes[i].duration
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



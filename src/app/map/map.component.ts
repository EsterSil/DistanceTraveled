import {Component, OnInit, ViewChild} from '@angular/core';
import {ROUTES} from '../map-content/testRoute';
import {TestEvents} from '../map-content/testEvents';
import {MapEvent} from '../map-content/classes/MapEvent';
import {MapContentComponent} from '../map-content/map-content.component';
import {EventConstructorComponent} from '../event-constructor/event-constructor.component';
import {AgmMap, GoogleMapsAPIWrapper} from '@agm/core';
import {LatLngDate} from '../map-content/classes/LatLngDate';
import {Observable, of} from 'rxjs';
import {Route} from '../map-content/classes/Route';
import {RouteService} from '../route.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  startPointLat = ROUTES[ROUTES.length - 1].route[0].lat;
  startPointLng = ROUTES[ROUTES.length - 1].route[0].lng;
  eventModeOn  = false;
  cursor = 'pointer';
  resentRoutes: Route[];
  currentBounds: LatLngDate[];
  @ViewChild(MapContentComponent) mapContent: MapContentComponent;
  @ViewChild(EventConstructorComponent) eventConstructor: EventConstructorComponent;

  constructor(private routeService: RouteService) {}
  ngOnInit() {
    this.getResentRoutes();
  }
  getResentRoutes() {
    this.routeService.getResentRoutes().subscribe(routes => this.resentRoutes = routes);
  }
  onEventMode() {
    this.eventModeOn = true;
  }
  onBoundsChange($event): void  {
    console.log('NE.lat' + $event.getNorthEast().lat() );
    console.log('NE.lng' + $event.getNorthEast().lng());
    let northEast = new LatLngDate($event.getNorthEast().lng(), $event.getNorthEast().lat());
    let southWest = new LatLngDate($event.getSouthWest().lng(), $event.getSouthWest().lat());
    this.mapContent.getLocalEvents(northEast, southWest);
    this.mapContent.addLocalEventsOnMap();
  }

  clickOnMap($event) {
    if (this.eventModeOn) {
      this.mapContent.addNewEventOnMap(new MapEvent('testEvent', $event.coords.lat, $event.coords.lng));
      this.eventConstructor.setLatLng($event.coords.lat, $event.coords.lng);
      this.eventConstructor.display = true;
      this.eventModeOn = false;
      TestEvents.addTestEvent(new MapEvent('testEvent', $event.coords.lat, $event.coords.lng));
      }
  }
}

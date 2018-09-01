import {Component, OnInit, ViewChild} from '@angular/core';
import {ROUTES} from '../map-content/testRoute';
import {TestEvents} from '../map-content/testEvents';
import {MapEvent} from '../map-content/classes/MapEvent';
import {MapContentComponent} from '../map-content/map-content.component';
import {EventConstructorComponent} from '../event-constructor/event-constructor.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  startPointLat = ROUTES.routes[ROUTES.routes.length - 1].route[0].lat;
  startPointLng = ROUTES.routes[ROUTES.routes.length - 1].route[0].lng;
  eventModeOn  = false;
  cursor = 'pointer';
  @ViewChild(MapContentComponent) mapContent: MapContentComponent;
  @ViewChild(EventConstructorComponent) eventConstructor: EventConstructorComponent;
  ngOnInit() {
  }
  onEventMode() {
    this.eventModeOn = true;
  }
  clickOnMap($event) {
    if (this.eventModeOn) {
      console.log('coords.lat ' + $event.coords.lat );
      console.log('coords.lng ' + $event.coords.lng );
      // let newEvent = new MapEvent('testEvent', $event.coords.lat, $event.coords.lng);
      console.log('map: 1');
      this.mapContent.addNewEventOnMap(new MapEvent('testEvent', $event.coords.lat, $event.coords.lng));
      console.log('map: 2');
      this.eventConstructor.setLatLng($event.coords.lat, $event.coords.lng);
      console.log('map: 3');
      this.eventConstructor.display = true;
      console.log('map: 111111111');
      this.eventModeOn = false;
      TestEvents.addTestEvent(new MapEvent('testEvent', $event.coords.lat, $event.coords.lng));
      }
  }
}

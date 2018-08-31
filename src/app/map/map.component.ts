import {Component, OnInit, ViewChild} from '@angular/core';
import {ROUTES} from '../map-content/testRoute';
import {TestEvents} from '../map-content/testEvents';
import {Event} from '../map-content/Event';
import {MapContentComponent} from '../map-content/map-content.component';

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
  ngOnInit() {
  }
  onEventMode() {
    this.eventModeOn = true;
  }
  clickOnMap($event) {
    if (this.eventModeOn) {
      console.log('coords.lat ' + $event.coords.lat );
      console.log('coords.lng ' + $event.coords.lng );
      TestEvents.addTestEvent(new Event('testEvent', $event.coords.lat, $event.coords.lng))
      this.mapContent.addEventOnMap();
      this.eventModeOn = false;
      }
  }
}

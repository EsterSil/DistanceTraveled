import { Component, OnInit } from '@angular/core';
import {AgmInfoWindow, InfoWindowManager} from '@agm/core';
import {MapEvent} from '../map-content/classes/MapEvent';
import {MapEventService} from '../map-event.service';

@Component({
  selector: 'app-event-constructor',
  templateUrl: './event-constructor.component.html',
  styleUrls: ['./event-constructor.component.css']
})
export class EventConstructorComponent implements OnInit {
  selectedLat: number;
  selectedLng: number;
  eventName: string;
  eventDiscription: string;
  constructor(private mapEventService: MapEventService) { }
  display = false;

  showDialog() {
    this.display = true;
  }
  ngOnInit() {
  }

  public setLatLng(lat: number, lng: number): void {
    this.selectedLat = lat;
    this.selectedLng = lng;
  }
  addEvent(): void {
    let mapEvent = new MapEvent(this.eventName, this.selectedLat, this.selectedLng);
    this.mapEventService.addMapEvent(mapEvent);
    this.display = false;
  }
}

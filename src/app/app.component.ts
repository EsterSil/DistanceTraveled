import {Component, OnInit} from '@angular/core';
import { KNOWN } from './mock-events';
import {MapEventService} from './map-event.service';
import {MapEvent} from './map-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  knownEvents: MapEvent[];
  eventMode = false;
  constructor(private mapEventService: MapEventService) {
  }
  onEventsMode(): void {
    this.eventMode = true;
  }
  getKnownEvents(): void {
    this.mapEventService.getEvents().subscribe(mapEvents => this.knownEvents = mapEvents);
  }

  updData(): void {
    this.getKnownEvents();
  }
  ngOnInit(): void {
    this.getKnownEvents();
  }
}

import {Event} from '../Event';
import {AgmInfoWindow, AgmMarker, MarkerManager} from '@agm/core';
import {QueryList} from '@angular/core';

export class EventService {
  private _allShowEvent: Array<Event> = new Array<Event>();

  addEvent(event: Event) {
    this._allShowEvent.push(event);
  }

  get allShowEvent(): Array<Event> {
    return this._allShowEvent;
  }

  set allShowEvent(value: Array<Event>) {
    this._allShowEvent = value;
  }
}

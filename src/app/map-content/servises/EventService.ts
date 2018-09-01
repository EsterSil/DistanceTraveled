import {MapEvent} from '../classes/MapEvent';
import {AgmInfoWindow, AgmMarker, MarkerManager} from '@agm/core';
import {QueryList} from '@angular/core';

export class EventService {
  private _allShowEvent: Array<MapEvent> = new Array<MapEvent>();

  addEvent(event: MapEvent) {
    this._allShowEvent.push(event);
  }

  get allShowEvent(): Array<MapEvent> {
    return this._allShowEvent;
  }

  set allShowEvent(value: Array<MapEvent>) {
    this._allShowEvent = value;
  }
}

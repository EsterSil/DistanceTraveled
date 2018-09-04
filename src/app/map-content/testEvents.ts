import {MapEvent} from './classes/MapEvent';
let event1: MapEvent = new MapEvent('event1', 55.219410, 37.139358 );
let event2: MapEvent = new MapEvent('event2', 55.329310, 37.539258 );
let event3: MapEvent = new MapEvent('event3', 55.439110, 37.339158 );
let event4: MapEvent = new MapEvent('event4', 52.739110, 38.639158 );
let event5: MapEvent = new MapEvent('event5', 53.739110, 32.639158 );
let event6: MapEvent = new MapEvent('event6', 54.739110, 35.639158 );

export const EVENTS: Array<MapEvent> = [event1, event2, event3];

export class TestEvents {
  public static addTestEvent(testEvent: MapEvent) {
    EVENTS.push(testEvent);
  }
}

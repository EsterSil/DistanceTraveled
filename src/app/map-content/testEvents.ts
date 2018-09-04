import {MapEvent} from './classes/MapEvent';
let event1: MapEvent = new MapEvent('event1',  55.75240915084298, 37.6475524704922);
let event2: MapEvent = new MapEvent('event2',  55.73452455544298, 37.6234524704922);
let event3: MapEvent = new MapEvent('event1',  55.80240915084298, 37.5975524704922);
let event4: MapEvent = new MapEvent('event1',  55.89240915084298, 37.6375524704922);

export const EVENTS: Array<MapEvent> = [event1, event2, event3, event4];

export class TestEvents {
  public static addTestEvent(testEvent: MapEvent) {
    EVENTS.push(testEvent);
  }
}

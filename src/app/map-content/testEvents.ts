import {Event} from './Event';
let event1: Event = new Event('event1', 55.719410, 37.639358 );
let event2: Event = new Event('event2', 55.729310, 37.639258 );
let event3: Event = new Event('event3', 55.739110, 37.639158 );

export const EVENTS: Array<Event> = [event1, event2, event3];

export class TestEvents {
  public static addTestEvent(testEvent: Event) {
    EVENTS.push(testEvent);
  }
}

import {AgmMarker} from '@agm/core';

export class Event {
  eventName: String;
  eventDiscription: String;
  latitude: number;
  longitude: number;


  constructor(eventName: String, latitude: number, longitude: number) {
    this.eventName = eventName;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

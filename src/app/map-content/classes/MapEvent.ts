

export class MapEvent {
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

import { LatLngLiteral} from '@agm/core';

export class LatLngDate implements LatLngLiteral {
  lat: number;
  lng: number;
  date: number;

  constructor (lat: number, lng: number) {
    this.lng = lng;
    this.lat = lat;
  }
 /* getLat(): number {
    return this.lat;
  }

  getLng(): number {
    return this.lng;
  }
  getDate(): number {
    return this.date;
  }*/
}

import {AgmMarker, LatLngLiteral, MarkerManager} from '@agm/core';
import {MarkerRoute} from '../MarkerRoute';
import {Event} from '../Event';
export class MarkerService {

  allMarkerRoute: Array<MarkerRoute> = new Array<MarkerRoute>();
  public getAllMarker() {
    return this.allMarkerRoute;
  }
  public addMarkerRoute(markerRote: MarkerRoute) {
    this.allMarkerRoute.push(markerRote);
  }
  public addMarkerOnMap(manager: MarkerManager, coordinate: LatLngLiteral) {
    let marker: AgmMarker = new AgmMarker(manager);
    marker.latitude = coordinate.lat;
    marker.longitude = coordinate.lng;
   // marker.iconUrl = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png';
    manager.addMarker(marker);

    return marker;
  }

  public addEventMarkersOnMap(manager: MarkerManager, events: Array<Event>) {
    events.forEach(event => {
      let eventMarker: AgmMarker = new AgmMarker(manager);
      eventMarker.latitude = event.latitude;
      eventMarker.longitude = event.longitude;
      eventMarker.iconUrl = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Flag-1-Right-Azure-icon.png';
      manager.addMarker(eventMarker);
    });
  }
}

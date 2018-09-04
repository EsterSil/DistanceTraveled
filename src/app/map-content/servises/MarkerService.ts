import {AgmInfoWindow, AgmMarker, InfoWindowManager, LatLngLiteral, MarkerManager} from '@agm/core';
import {MarkerRoute} from '../classes/MarkerRoute';
import {MapEvent} from '../classes/MapEvent';
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

  public addAllEventMarkersOnMap(manager: MarkerManager, mapEvents: Array<MapEvent>) {
    console.log('events ' + mapEvents.length);
    mapEvents.forEach(mapevent => {
      this.addEventMarkerOnMap(manager, mapevent);
    });
  }
  public addEventMarkerOnMap(manager: MarkerManager, mapEvent: MapEvent) {
      let eventMarker: AgmMarker = new AgmMarker(manager);
    console.log('events 1');
    console.log(mapEvent);
      eventMarker.latitude = mapEvent.latitude;
    console.log('events 2');
      eventMarker.longitude = mapEvent.longitude;
      eventMarker.visible = true;
    console.log('events 3');
      eventMarker.iconUrl = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Flag-1-Right-Azure-icon.png';
    console.log('events 4');
      manager.addMarker(eventMarker);
    console.log('events 5');
  }
  /*
  public addWindow(marker: AgmMarker) {
    marker.openInfoWindow = true;
    let infoManafer = InfoWindowManager();
    let info = new AgmInfoWindow();
  }*/
}

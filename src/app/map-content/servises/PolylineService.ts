import {AgmPolyline, PolylineManager} from '@agm/core';
import {PolylineOptions} from '@agm/core/services/google-maps-types';
import {WindowService} from './WindowService';

export class PolylineService {
  allRoute: Array<AgmPolyline> = new Array<AgmPolyline>();

  public getAllRoute() {
    return this.allRoute;
  }

  public addRoute(route: AgmPolyline) {
    this.allRoute.push(route);
  }

  public addPolilaneOnMap(manager: PolylineManager, option: PolylineOptions) {
    let polyline: AgmPolyline = new AgmPolyline(manager);
    manager.addPolyline(polyline);
    manager.setPolylineOptions(polyline, option);
    return polyline;
  }

  public unfocusedPolilanes(manager: PolylineManager) {
    this.allRoute.map(agm => this.changeColorPolilane(manager, agm, 'black'));
  }

  changeColorPolilane(manager: PolylineManager, polylane: AgmPolyline, color: string) {
    manager.setPolylineOptions(polylane, {
      strokeColor: color
    });
  }

  focucedPolylane(manager: PolylineManager, polylane: AgmPolyline) {
    manager.setPolylineOptions(polylane, {
      strokeColor: 'red'
    });
  }
}

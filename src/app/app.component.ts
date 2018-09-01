import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  display = false;
  options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
  };
  showDialog(): void {
    this.display = true;
  }
  addMarker() {}
}

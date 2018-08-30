import {BrowserModule} from '@angular/platform-browser';
import {NgModule, TemplateRef} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {MapContentComponent} from './map-content/map-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapContentComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, CommonModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8',
      libraries: ['geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

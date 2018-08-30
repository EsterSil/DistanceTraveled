import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { EventConstructorComponent } from './event-constructor/event-constructor.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MapContentComponent } from './map-content/map-content.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventConstructorComponent,
    MapContentComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8',
      libraries: ['geometry']
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

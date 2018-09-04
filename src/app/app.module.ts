import {BrowserModule} from '@angular/platform-browser';
import {NgModule, TemplateRef} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {MapContentComponent} from './map-content/map-content.component';
import {EventConstructorComponent} from './event-constructor/event-constructor.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapContentComponent,
    EventConstructorComponent,
  ],
  imports: [
    BrowserModule, TabViewModule, FormsModule, HttpClientModule, CommonModule, DialogModule, BrowserAnimationsModule, DropdownModule,
    ButtonModule, AccordionModule, InputTextareaModule, CalendarModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB48P592kV2b7iq71QvnmfP66CF4uqUFZ8',
      libraries: ['geometry']
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}

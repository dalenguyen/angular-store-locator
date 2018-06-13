import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LocationsService } from './locations.service';
import { MapComponent } from './map/map.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [LocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Marker } from '../../models';
import { MouseEvent } from '@agm/core';
import { LocationsService } from '../locations.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: Marker[] = this.locationService.getMarkers();

  constructor(private locationService: LocationsService) { }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
  }

}

import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { MapsService } from '../maps.service';
import { LocationsService } from '../locations.service';
import { Marker } from '../../models';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @ViewChild('search') public searchElementRef: ElementRef;

  public searchControl: FormControl;

  public locations: Marker[];


  constructor(
    private mapApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapsService: MapsService,
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.locations = this.locationsService.getMarkers();

    this.mapApiLoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set new latitude, longtitude
          this.mapsService.newCoordinators.next({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            zoom: 10
          });
        });
      });
    });
  }

  openWindow(location: Marker, index: number) {
    this.mapsService.openWindow.next(index);
    this.mapsService.newCoordinators.next({
      lat: location.lat,
      lng: location.lng,
      zoom: 10
    });
  }

}

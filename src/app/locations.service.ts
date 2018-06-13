import { Injectable } from '@angular/core';
import { Marker } from '../models';

@Injectable()
export class LocationsService {

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      info: 'InfoWindow content'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      info: 'InfoWindow content'
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      info: 'InfoWindow content'
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}

import { Injectable } from '@angular/core';
import { Marker } from '../models';

@Injectable()
export class LocationsService {

  // @Todo: replace markers by an API
  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      title: 'A',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: true,
      street: '2222 McKinney Ave Suite 120',
      city: 'Dallas',
      state: 'TX',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 51.773858,
      lng: 8.815982,
      title: 'B',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: true,
      street: '2222 McKinney Ave Suite 120',
      city: 'Dallas',
      state: 'TX',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 51.573858,
      lng: 7.915982,
      title: 'C',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: true,
      street: '2222 McKinney Ave Suite 120',
      city: 'Dallas',
      state: 'TX',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}

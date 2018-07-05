import { Injectable } from '@angular/core';
import { Marker } from '../models';

@Injectable()
export class LocationsService {

  // @Todo: replace markers by an API
  markers: Marker[] = [
    {
      lat: 43.678418,
      lng: -79.809007,
      title: 'A',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '123 Yonge Street',
      city: 'Toronto',
      state: 'ON',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 43.678418,
      lng: -80.809007,
      title: 'B',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '123 Yonge Street',
      city: 'Toronto',
      state: 'ON',
      postalcode: '75201',
      email: 'test@example.com',
      phone: '111-111-1111',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 43.978418,
      lng: -78.809007,
      title: 'C',
      icon: 'https://www.ftsgps.com/wp-content/uploads/2017/05/icon-location-100.png',
      draggable: false,
      street: '2222 McKinney Ave Suite 120',
      city: 'Toronto',
      state: 'ON',
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

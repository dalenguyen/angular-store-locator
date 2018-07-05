import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MapsService {

  public lat: number = 43.678418;
  public lng: number = -79.809007;
  public zoom: number = 8;

  public newCoordinators = new Subject();

  public openWindow = new Subject();

  constructor() { }

}

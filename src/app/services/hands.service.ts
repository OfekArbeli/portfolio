import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandsService {
  rightFingerPulled = false;
  rightThumbPulled = false;
  rightMiddleFingerPulled = false;
  rightPinkyPulled = false;
  leftFingerPulled = false;
  leftThumbPulled = false;
  leftMiddleFingerPulled = false;
  leftPinkyPulled = false;
  constructor() { }
}

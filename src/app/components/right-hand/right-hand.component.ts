import { Component, OnInit } from '@angular/core';
import { HandsService } from 'src/app/services/hands.service';

@Component({
  selector: 'app-right-hand',
  templateUrl: './right-hand.component.html',
  styleUrls: ['./right-hand.component.scss']
})
export class RightHandComponent implements OnInit {
  constructor(private handsService:HandsService) { }

  ngOnInit() {
  }
  pullFinger(){
    console.log("finger-pulled");
    this.handsService.rightFingerPulled = true;
  }

  pullThumb(){
    console.log("thumb-pulled");
    this.handsService.rightThumbPulled = true;
  }

  pullMiddleFingers(){
    console.log("middleFinger-pulled");
    this.handsService.rightMiddleFingerPulled = true;
  }

  pullPinky(){
    console.log("pinkyPulled-pulled");
    this.handsService.rightPinkyPulled = true;
  }

  openHand(){
    this.handsService.rightFingerPulled = true;
    this.handsService.rightMiddleFingerPulled = true;
  }

  closeHand(){
    this.handsService.rightPinkyPulled = true;
  }

  stopPulling(){
    console.log("stopped pulling");
    this.handsService.rightFingerPulled = false;
    this.handsService.rightThumbPulled = false;
    this.handsService.rightMiddleFingerPulled = false;
    this.handsService.rightPinkyPulled = false;
  }

  handPositions(){
    return {
      'palm-container': true,
      'finger-pull': this.handsService.rightFingerPulled,
      'thumb-pull':this.handsService.rightThumbPulled,
      'middle-finger-pull':this.handsService.rightMiddleFingerPulled,
      'pinky-pull':this.handsService.rightPinkyPulled,

      'finger-push': this.handsService.leftFingerPulled,
      'thumb-push':this.handsService.leftThumbPulled,
      'middle-finger-push':this.handsService.leftMiddleFingerPulled,
      'pinky-push':this.handsService.leftPinkyPulled
    } 
  }

}

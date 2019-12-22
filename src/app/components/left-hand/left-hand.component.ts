import { Component, OnInit } from '@angular/core';
import { HandsService } from 'src/app/services/hands.service';

@Component({
  selector: 'app-left-hand',
  templateUrl: './left-hand.component.html',
  styleUrls: ['./left-hand.component.scss']
})
export class LeftHandComponent implements OnInit {
  constructor(private handsService:HandsService) { }

  ngOnInit() {
  }
  pullFinger(){
    console.log("finger-pulled");
    this.handsService.leftFingerPulled = true;
  }

  pullThumb(){
    console.log("thumb-pulled");
    this.handsService.leftThumbPulled = true;
  }

  pullMiddleFingers(){
    console.log("middleFinger-pulled");
    this.handsService.leftMiddleFingerPulled = true;
  }

  pullPinky(){
    console.log("pinkyPulled-pulled");
    this.handsService.leftPinkyPulled = true;
  }

  openHand(){
    this.handsService.leftFingerPulled = true;
    this.handsService.leftMiddleFingerPulled = true;
  }

  closeHand(){
    this.handsService.leftPinkyPulled = true;
    this.handsService.leftThumbPulled = true;
  }

  stopPulling(){
    console.log("stopped pulling");
    this.handsService.leftFingerPulled = false;
    this.handsService.leftThumbPulled = false;
    this.handsService.leftMiddleFingerPulled = false;
    this.handsService.leftPinkyPulled = false;
  }

  handPositions(){
    return {
      'palm-container': true,
      'finger-pull': this.handsService.leftFingerPulled,
      'thumb-pull':this.handsService.leftThumbPulled,
      'middle-finger-pull':this.handsService.leftMiddleFingerPulled,
      'pinky-pull':this.handsService.leftPinkyPulled,

      'finger-push': this.handsService.rightFingerPulled,
      'thumb-push':this.handsService.rightThumbPulled,
      'middle-finger-push':this.handsService.rightMiddleFingerPulled,
      'pinky-push':this.handsService.rightPinkyPulled
    }  
  }

}

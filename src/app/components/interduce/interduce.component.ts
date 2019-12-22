import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { HandsService } from 'src/app/services/hands.service';
import { ScrollerService } from 'src/app/services/scroller.service';

@Component({
  selector: 'app-interduce',
  templateUrl: './interduce.component.html',
  styleUrls: ['./interduce.component.scss']
})
export class InterduceComponent implements OnInit {
  isInView = true;
  @ViewChild('paragraph', {static:false}) paragraph: ElementRef;
  constructor(private handsService:HandsService, private scrollerService:ScrollerService) { }

  ngOnInit() {
  }



  isInViewport() : boolean {
    let bounding = this.paragraph.nativeElement.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.checkForAnimations();
  }

  checkForAnimations(){
    if(this.isInViewport()){
      if(!this.isInView){
        this.isInView = true;
      }
    }
    else{
      if(this.isInView){
        this.isInView = false;     
      }
    }
  }

  firstLinePositions(){
    let rightMiddleFingerPulled = this.handsService.rightMiddleFingerPulled;
    let leftMiddleFingerPulled= this.handsService.leftMiddleFingerPulled;
    return {
      'pullRight': rightMiddleFingerPulled && !leftMiddleFingerPulled,
      'pullLeft': leftMiddleFingerPulled && !rightMiddleFingerPulled
    }
  }

  secondLinePositions(){
    let rightFingerPulled = this.handsService.rightFingerPulled;
    let leftFingerPulled= this.handsService.leftFingerPulled;
    return{
      'pullRight': rightFingerPulled && !leftFingerPulled,
      'pullLeft': leftFingerPulled && !rightFingerPulled
    }
  }

  thirdLinePositions(){
    let rightThumbPulled = this.handsService.rightThumbPulled;
    let leftThumbPulled= this.handsService.leftThumbPulled;
    return{
      'pullRight': rightThumbPulled && !leftThumbPulled,
      'pullLeft': leftThumbPulled && !rightThumbPulled
    }
  }

  forthLinePositions(){
    let rightFingerPulled = this.handsService.rightFingerPulled;
    let leftFingerPulled= this.handsService.leftFingerPulled;
    let rightThumbPulled = this.handsService.rightThumbPulled;
    let leftThumbPulled= this.handsService.leftThumbPulled;
    let rightPinkyPulled = this.handsService.rightPinkyPulled;
    let leftPinkyPulled= this.handsService.leftPinkyPulled;
    let rightMiddleFingerPulled = this.handsService.rightMiddleFingerPulled;
    let leftMiddleFingerPulled= this.handsService.leftMiddleFingerPulled;
    return{
      'pullBoth': (leftPinkyPulled || rightPinkyPulled) && 
      (!rightFingerPulled&&!leftFingerPulled) &&
      (!rightThumbPulled&&!leftThumbPulled) &&
      (!rightMiddleFingerPulled&&!leftMiddleFingerPulled)
    }
  }

  routeTo(fragment){
    this.scrollerService.scrollTo(fragment);
}

}

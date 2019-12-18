import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interduce',
  templateUrl: './interduce.component.html',
  styleUrls: ['./interduce.component.scss']
})
export class InterduceComponent implements OnInit {
  isInView = true;
  @ViewChild('paragraph', {static:false}) paragraph: ElementRef;
  constructor() { }

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
}

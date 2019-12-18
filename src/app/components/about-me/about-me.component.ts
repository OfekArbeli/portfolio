import { Component, OnInit, Renderer2, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  isInView = false;
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

import { Component, ViewChild, ElementRef, HostListener, ComponentRef } from '@angular/core';
import { ScrollerService } from './services/scroller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "ofek's portfolio";
  @ViewChild('interduce', {read: ElementRef , static: false}) interduce: ElementRef;
  @ViewChild('aboutMe', {read: ElementRef , static: false}) aboutMe: ElementRef;
  @ViewChild('myProjects', {read: ElementRef , static: false}) myProjects: ElementRef;
  @ViewChild('contactMe', {read: ElementRef , static: false}) contactMe: ElementRef;
  lastScrollPos = 0;
  goUpButtonShow = false;
  constructor(private scrollerService:ScrollerService){

  }

  isInViewportBottom(element:ElementRef) : boolean {
    let bounding = element.nativeElement.getBoundingClientRect();
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  isInViewportTop(element:ElementRef) : boolean {
    let bounding = element.nativeElement.getBoundingClientRect();
    return (
      bounding.top <= 0
      && bounding.bottom >= 0
    );
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log(window.innerWidth);
    this.checkIfScrollerIsAvailable();
    this.toggleGoUpButtonIfNeeded();
  }

  toggleGoUpButtonIfNeeded(){
    let bounding = this.interduce.nativeElement.getBoundingClientRect();
    if(bounding.top < 0){
      this.goUpButtonShow = true;
    }
    else{
      this.goUpButtonShow = false;
    }
  }

  checkIfScrollerIsAvailable(){
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if(this.scrollerService.routerAvailable){
      if(currentScroll > this.lastScrollPos){
        this.scrollIfInBottomView();
      }
      else{
        this.scrollIfInTopView();
      }
    }
    this.lastScrollPos = currentScroll;
  }

  scrollIfInBottomView(){
    if(this.isInViewportBottom(this.interduce)){
      this.scrollerService.scrollTo('home');
    }
    else if(this.isInViewportBottom(this.aboutMe)){
      this.scrollerService.scrollTo('about-me')
    }
    else if(this.isInViewportBottom(this.myProjects)){
      this.scrollerService.scrollTo('my-projects')
    }
    else if(this.isInViewportBottom(this.contactMe)){
      this.scrollerService.scrollTo('contact-me')
    }
  }

  scrollIfInTopView(){
    if(this.isInViewportTop(this.interduce)){
      this.scrollerService.scrollTo('home');
    }
    else if(this.isInViewportTop(this.aboutMe)){
      this.scrollerService.scrollTo('about-me')
    }
    else if(this.isInViewportTop(this.myProjects)){
      this.scrollerService.scrollTo('my-projects')
    }
    else if(this.isInViewportTop(this.contactMe)){
      this.scrollerService.scrollTo('contact-me')
    }
  }

  scrollTop(){
    if(this.scrollerService.routerAvailable){
      this.scrollerService.scrollTo('home');
    }
  }
}

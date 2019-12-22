import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {
  routerAvailable = true;
  fragment = 'home';
  interval;
  constructor(private router:Router) { }
  
  scrollTo(fragment){
    this.fragment = fragment;
    this.routerAvailable = false;
    this.router.navigate( [ '/' ], { fragment: fragment } );
    this.interval = setInterval(()=>{this.checkIfNavigationIsOver();}, 800);
  }
  checkIfNavigationIsOver(){
    if(this.router.url === ('/#'+this.fragment)){
      clearInterval(this.interval);
      this.routerAvailable = true;
    }
  }
  // scrollTo(fragment){
  //   this.router.navigate( [ '/' ], { fragment: fragment } );
  // }
}

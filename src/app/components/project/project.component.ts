import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { timeout } from 'q';
import { ProjectsService } from 'src/app/services/projects.service';
import { ScrollerService } from 'src/app/services/scroller.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit{
  @Input() project;
  @ViewChild('videoRef', {static:false}) videoRef: ElementRef;
  open;
  prograssStyle;
  fullScreen; 
  constructor(private projectsService:ProjectsService,private scrollerService:ScrollerService) {
    this.open = false;
    this.fullScreen = false;
    this.initprograssStyle()
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.videoRef.nativeElement.muted = true;
  }

  initprograssStyle(){
    this.prograssStyle = {
      'width' : 0
    }
  }

  openSection(element : HTMLElement){
    if(!this.open){
        this.open = true;
        // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
  closeProject(){
    this.open = false;
    this.stopVideo();
  }
  playVideo(){
    this.videoRef.nativeElement.play();
    this.projectsService.setSelectedProject(this.project);
    this.projectsService.selected = true;
  }

  stopVideo(){
    if(!this.open){
      this.videoRef.nativeElement.pause();
      this.videoRef.nativeElement.currentTime = 0;
      this.projectsService.selected = false;
    }
  }

  showPrograss(){
    let currentTime = this.videoRef.nativeElement.currentTime;
    let duration = this.videoRef.nativeElement.duration;
    // console.log("currentTime ", currentTime);
    // console.log("duration ", duration);
    let width = Math.floor((100 / duration) * currentTime);
    this.prograssStyle.width = width + '%';
    console.log(this.prograssStyle.width);
  }

  setOnFullscreen(){
    this.scrollerService.routerAvailable = false;
    this.videoRef.nativeElement.requestFullscreen();
  }

  checkIfFullscreenClosed(){
    this.fullScreen = !this.fullScreen;
    if(!this.fullScreen){
      this.scrollerService.routerAvailable = true;
    }
  }
}

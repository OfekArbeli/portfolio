import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { timeout } from 'q';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit{
  @Input() project;
  @ViewChild('videoRef', {static:false}) videoRef: ElementRef;
  open;
  constructor(private projectsService:ProjectsService) {
    this.open = false;
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.videoRef.nativeElement.muted = true;
  }

  openSection(element : HTMLElement){
    if(!this.open){
        this.open = true;
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
  closeProject(){
    this.open = false;
  }
  playVideo(){
    this.videoRef.nativeElement.play();
    this.projectsService.setSelectedProject(this.project);
    this.projectsService.selected = true;
  }

  stopVideo(){
    this.videoRef.nativeElement.pause();
    this.videoRef.nativeElement.currentTime = 0;
    this.projectsService.selected = false;
  }
}

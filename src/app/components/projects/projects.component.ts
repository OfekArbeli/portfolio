import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isParagraphInView = false;
  isReplicaInView = false;
  @ViewChild('paragraph', {static:false}) paragraph: ElementRef;
  @ViewChild('paragraphReplica', {static:false}) paragraphReplica: ElementRef;
  isInfoOpen;
  src="../../../assets/videos/I-LOAD.webm";
  constructor(private projectsService : ProjectsService) {
    this.isInfoOpen = false;
  }

  ngOnInit() {
    this.projectsService.initProjects()
  }

  openInfo(){
    this.isInfoOpen = true;
  }

  isInViewport(element) : boolean {
    let bounding = element.nativeElement.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.checkIfParagraphInView();
    this.checkIfReplicaInView();
  }
  checkIfParagraphInView() {
    if(this.isInViewport(this.paragraph)){
      if(!this.isParagraphInView){
        this.isParagraphInView = true;
      }
    }
    else{
      if(this.isParagraphInView){
        this.isParagraphInView = false;     
      }
    }
  }
  checkIfReplicaInView() {
    if(this.isInViewport(this.paragraphReplica)){
      if(!this.isReplicaInView){
        this.isReplicaInView = true;
      }
    }
    else{
      if(this.isReplicaInView){
        this.isReplicaInView = false;     
      }
    }
  }
  // this.isInViewport(this.paragraphReplica)
}

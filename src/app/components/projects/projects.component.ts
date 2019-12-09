import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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
}

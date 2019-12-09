import { Injectable } from '@angular/core';
import data from  '../data';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects;
  selectedProject;
  selected = false;
  constructor() {
    this.initProjects(); 
    this.projects = data.projects;
  }
  initProjects(){
    // this.projects = []
  }
  setSelectedProject(project){
    this.selectedProject = project;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology',
  template: `<p [ngClass]="technology">{{technology}}</p>`,
  styleUrls: ['../project/project.component.scss']
})
export class TechnologyComponent{
  @Input() technology;
  constructor() { }
}

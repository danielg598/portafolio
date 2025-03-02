import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() project!: Project;
}

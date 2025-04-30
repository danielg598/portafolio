import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() project!: Project;
  @Input() porjectProduction: boolean = true;
}

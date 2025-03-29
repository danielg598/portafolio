import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOverlayService } from '../../../../../utilities/services/modal-overlay.service';
import { AngularInfoAppGiffsComponent } from '../../../../../utilities/Modales/angular-info-app-giffs/angular-info-app-giffs.component';
import { PortalModule } from '@angular/cdk/portal';
import { FiltroAppComponent } from '../../../../../utilities/Modales/filtro-app/filtro-app.component';
import { FormAppModalComponent } from '../../../../../utilities/Modales/form-app-modal/form-app-modal.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../../utilities/interfaces/projects';
import { ProjectsComponent } from '../../../../../utilities/componentesReutilizables/projects/projects.component';

@Component({
    selector: 'app-angular',
    imports: [
        AngularInfoAppGiffsComponent,
        FiltroAppComponent,
        FormAppModalComponent,
        PortalModule,
        CommonModule,
        ProjectsComponent
    ],
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss'
})
export class AngularComponent implements OnInit, AfterViewInit{
  
  @ViewChild('InfoAppGiff') InfoAppGiff: any;
  @ViewChild('InfoAppFiltrador') InfoAppFiltrador: any;
  @ViewChild('InfoAppFormApp') InfoAppFormApp: any;
  
  isLoading = true;

  projects: Project[] = [
    {
      title: 'Buscador de gifs',
      subtitle: 'gifs app',
      description: 'Comunicación entre componentes y API externo.',
      image: 'assets/gifsApp.png',
      link: 'https://jovial-profiterole-c79016.netlify.app/',
      iconFunction: () => this.infoAppGiffs()
    },
    {
      title: 'Filtro pipe',
      subtitle: 'app de filtrado',
      description: 'Filtrado de valores con Pipe y ngModel.',
      image: 'assets/filtroPipe.png',
      link: 'https://taupe-caramel-e8fa42.netlify.app/',
      iconFunction: () => this.filterPipe()
    },
    {
      title: 'FormApp',
      subtitle: 'app de formularios reactivos',
      description: 'Formularios reactivos con interfaces dinámicas.',
      image: 'assets/formApp.png',
      link: 'https://spontaneous-starburst-50214c.netlify.app',
      iconFunction: () => this.formApp()

    }
  ];


  constructor(private modal:ModalOverlayService){}
  ngAfterViewInit(): void {
    // this.isLoading = true;
  }

  ngOnInit() {
    // Simular un tiempo de carga (por ejemplo, 2 segundos)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }


  infoAppGiffs(){
    this.modal.openOverlay(this.InfoAppGiff);

  }
  filterPipe(){
    this.modal.openOverlay(this.InfoAppFiltrador);
  }
  formApp(){
    this.modal.openOverlay(this.InfoAppFormApp);
  }
}

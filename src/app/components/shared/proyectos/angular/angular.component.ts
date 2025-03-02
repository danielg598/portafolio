import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOverlayService } from '../../../../utilities/services/modal-overlay.service';
import { AngularInfoAppGiffsComponent } from '../../../../utilities/Modales/angular-info-app-giffs/angular-info-app-giffs.component';
import { PortalModule } from '@angular/cdk/portal';
import { FiltroAppComponent } from '../../../../utilities/Modales/filtro-app/filtro-app.component';
import { FormAppModalComponent } from '../../../../utilities/Modales/form-app-modal/form-app-modal.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-angular',
    imports: [
        AngularInfoAppGiffsComponent,
        FiltroAppComponent,
        FormAppModalComponent,
        PortalModule,
        CommonModule
    ],
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss'
})
export class AngularComponent implements OnInit, AfterViewInit{
  isLoading = true;

  @ViewChild('InfoAppGiff') InfoAppGiff: any;
  @ViewChild('InfoAppFiltrador') InfoAppFiltrador: any;
  @ViewChild('InfoAppFormApp') InfoAppFormApp: any;

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

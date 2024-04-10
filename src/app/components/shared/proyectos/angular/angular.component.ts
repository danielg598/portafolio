import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOverlayService } from '../../../../utilities/services/modal-overlay.service';
import { AngularInfoAppGiffsComponent } from '../../../../utilities/Modales/angular-info-app-giffs/angular-info-app-giffs.component';
import { PortalModule } from '@angular/cdk/portal';
import { FiltroAppComponent } from '../../../../utilities/Modales/filtro-app/filtro-app.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [
    AngularInfoAppGiffsComponent,
    FiltroAppComponent,
    PortalModule
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

  @ViewChild('InfoAppGiff') InfoAppGiff: any;
  @ViewChild('InfoAppFiltrador') InfoAppFiltrador: any;

  constructor(private modal:ModalOverlayService){}

  infoAppGiffs(){
    this.modal.openOverlay(this.InfoAppGiff);

  }
  filterPipe(){
    this.modal.openOverlay(this.InfoAppFiltrador);
  }

}

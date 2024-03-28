import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOverlayService } from '../../../../utilities/services/modal-overlay.service';
import { AngularInfoAppGiffsComponent } from '../../../../utilities/Modales/angular-info-app-giffs/angular-info-app-giffs.component';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [
    AngularInfoAppGiffsComponent,
    PortalModule
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

  @ViewChild('InfoAppGiff') InfoAppGiff: any;

  constructor(private modal:ModalOverlayService){}

  infoAppGiffs(){
    this.modal.openOverlay(this.InfoAppGiff)
    console.log("hola mundo");
    
  }

}

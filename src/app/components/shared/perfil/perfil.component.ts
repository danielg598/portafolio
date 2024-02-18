import { Component, OnInit, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { Options } from '../../../utilities/options';
import { ModalGlobalComponent } from '../../../utilities/modal-global/modal-global.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ModalOverlayService } from '../../../services/modal.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CardModule, ExperienciaComponent,ModalGlobalComponent, PortalModule, DragDropModule ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{


  constructor( private modal: ModalOverlayService){}

  ngOnInit(): void {
    // this.prueba();
  }
  @ViewChild(ExperienciaComponent) experiencia!:ExperienciaComponent;
  @ViewChild('modalAcuerdosNoPagados') modalAcuerdosNoPagados: any;

  prueba(){
    this.modal.openOverlay(this.modalAcuerdosNoPagados);
    
  }

  

}

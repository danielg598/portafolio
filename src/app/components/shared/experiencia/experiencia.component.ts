import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalOverlayService } from '../../../services/modal.service';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  constructor(private modal:ModalOverlayService){}
@ViewChild('experiencia', {static:true}) experiencia!: ElementRef;

closeModal(){
  this.modal.closeOverlay();
}



}

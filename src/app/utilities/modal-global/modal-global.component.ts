import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject } from '@angular/core';
import { PerfilComponent } from '../../components/shared/perfil/perfil.component';

@Component({
  selector: 'app-modal-global',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './modal-global.component.html',
  styleUrl: './modal-global.component.scss'
})
export class ModalGlobalComponent {

  constructor(@Inject(OverlayRef) public overlayRef: OverlayRef) {}

}

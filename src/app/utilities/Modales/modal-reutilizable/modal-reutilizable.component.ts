import { Component, Input, OnChanges } from '@angular/core';
import { InfoCompleta } from '../../interfaces/modalReuzable';

@Component({
  selector: 'app-modal-reutilizable',
  standalone: true,
  imports: [],
  templateUrl: './modal-reutilizable.component.html',
  styleUrl: './modal-reutilizable.component.scss'
})
export class ModalReutilizableComponent implements OnChanges{
  agrupadoConocimientos: { titulo: string; descripciones: string[] }[] = [];

  ngOnChanges() {
    if (this.data?.conocimientos && this.data?.listaConocimientos) {
      this.agrupadoConocimientos = this.data.conocimientos.map(c => ({
        titulo: c.tituloConocimiento,
        descripciones: this.data.listaConocimientos
          .filter(l => l.posicion === c.posicion)
          .map(l => l.descripcion)
      }));
    }
  }

  @Input() data: InfoCompleta = {
    imagen: '',
    titulo: '',
    subtitulo: '',
    tituloConocimientos: '',
    github: '',
    conocimientos: [],
    listaConocimientos: []
  };

}

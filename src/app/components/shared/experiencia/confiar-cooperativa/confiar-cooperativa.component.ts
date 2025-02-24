import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TablaComponent } from '../../../../utilities/componentesReutilizables/tabla/tabla.component';

@Component({
  selector: 'app-confiar-cooperativa',
  imports: [ButtonModule, TablaComponent],
  standalone:true,
  templateUrl: './confiar-cooperativa.component.html',
  styleUrl: './confiar-cooperativa.component.scss'
})
export class ConfiarCooperativaComponent {

  columns = [
    { key: 'id', label: 'Numero de funciones' },
    { key: 'funcion', label: 'funcion' },
    { key: 'horas', label: 'Horas dedicadas en esta función' }
  ];

  data = [
    { id: 1, funcion: 'Realizar soporte a desarrollos en java: en proyectos legacy, en proyectos spring framawork y en proyectos en springboot.', horas: 340 },
    { id: 2, funcion: 'Realizar nuevos desarrollos en proyectos existentes en java: en proyectos legacy, en proyectos spring framawork y en proyectos en springboot.', horas: 220 },
    { id: 3, funcion: 'Realizar soporte a desarrollos en progress 4gl, lenguaje orientado a eventos.', horas: 600 },
    { id: 4, funcion: 'Realizar nuevos desarrollos en proyectos existentes en progress 4gl, lenguaje orientado a eventos.', horas: 200 }
  ];

}

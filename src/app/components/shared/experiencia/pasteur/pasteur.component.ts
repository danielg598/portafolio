import { Component, ViewEncapsulation,  OnInit, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TablaComponent } from '../../../../utilities/componentesReutilizables/tabla/tabla.component';


@Component({
  selector: 'app-pasteur',
  imports: [ButtonModule, TablaComponent],
  standalone:true,
  templateUrl: './pasteur.component.html',
  styleUrl: './pasteur.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class PasteurComponent implements OnInit,OnDestroy{

  columns = [
    { key: 'id', label: 'Numero de funciones' },
    { key: 'funcion', label: 'funcion' },
    { key: 'horas', label: 'Horas dedicadas en esta función' }
  ];

  data = [
    { id: 1, funcion: 'Creación de servicios back-end “.NET CORE” para diferentes plataformas internas de la compañía.', horas: 720 },
    { id: 2, funcion: 'Mantenimiento de servicios back-end existentes “.NET CORE”.', horas: 720 },
    { id: 3, funcion: 'Creación de componentes en el front “angular” para las diferentes plataformas web de la compañía.', horas: 700 },
    { id: 4, funcion: 'Mantenimiento de aplicaciones web creadas en angular.', horas: 800 },
    { id: 5, funcion: 'Entrega de requerimientos mediante tareas o historias de usuario mediante la metodología scrum.', horas: 700 }
  ];

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}

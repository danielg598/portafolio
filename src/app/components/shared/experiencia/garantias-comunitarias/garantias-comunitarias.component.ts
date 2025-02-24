import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TablaComponent } from '../../../../utilities/componentesReutilizables/tabla/tabla.component';

@Component({
  selector: 'app-garantias-comunitarias',
  imports: [ButtonModule, TablaComponent],
  standalone:true,
  templateUrl: './garantias-comunitarias.component.html',
  styleUrl: './garantias-comunitarias.component.scss'
})
export class GarantiasComunitariasComponent {

  columns = [
    { key: 'id', label: 'Numero de funciones' },
    { key: 'funcion', label: 'funcion' },
    { key: 'horas', label: 'Horas dedicadas en esta función' }
  ];

  data = [
    { id: 1, funcion: 'Migración de proyecto php nativo: creación de servicios back-end en laravel.', horas: 1936 },
    { id: 2, funcion: 'Migración de proyecto php nativo: optimización de consultas sql.', horas: 1936 },
    { id: 3, funcion: 'Optimización de bases de datos en mysql: normalización de tablas, creación de índices para optimización de consultas.', horas: 1936 },
    { id: 4, funcion: 'Migración de proyecto php nativo: creación del front desde cero en angular 17.', horas: 1600 },
    { id: 5, funcion: 'Creación de componentes reutilizables y escalables.', horas: 1600 },
    { id: 6, funcion: 'Se trabaja en un desarrollo en angular según los principios SOLID.', horas: 800 },
    { id: 7, funcion: 'Trabajo con ngrx, rxjs en angular para un desarrollo optimo y escalable en todos los componentes del front en angular.', horas: 800 },
    { id: 8, funcion: 'Desarrollo de machine learning para aplicación bloomrisk, aplicación de pronóstico económico orientada a desarrollos personalizados para diferentes empresas.', horas: 600 }
  ];

}

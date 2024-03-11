import { Component, OnInit, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { GraficaConocimientosComponent } from '../../../utilities/graficas/grafica-conocimientos/grafica-conocimientos.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CardModule, PortalModule, DragDropModule,CommonModule, GraficaConocimientosComponent ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{

  data = [
    {
      name: "Angular",
      value: 60,
      bulletSettings: { src: "../../../../assets/angular.png" }
    },
    {
      name: "Node js",
      value: 50,
      bulletSettings: { src: "../../../../assets/node.png" }
    },
    {
      name: "nest js",
      value: 20,
      bulletSettings: { src: "../../../../assets/nest.png" }
    },
    {
      name: "React",
      value: 30,
      bulletSettings: { src: "../../../../assets/react.png" }
    },
    {
      name: "sql",
      value: 50,
      bulletSettings: { src: "../../../../assets/sql.png" }
    },
    {
      name: "laravel",
      value: 35,
      bulletSettings: { src: "../../../../assets/laravel.png" }
    }
  ];

  constructor( ){}

  ngOnInit(): void {
    // this.prueba();
  }

}

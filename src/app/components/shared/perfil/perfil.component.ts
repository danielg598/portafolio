import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { GraficaConocimientosComponent } from '../../../utilities/graficas/grafica-conocimientos/grafica-conocimientos.component';
import { graficaConocimientos } from '../../../utilities/interfaces/graficaConocimientos';
import { AngularConocimientosComponent } from './utilities/angular-conocimientos/angular-conocimientos.component';
import { NodeConocimientosComponent } from './utilities/node-conocimientos/node-conocimientos.component';
import { NestConocimientosComponent } from './utilities/nest-conocimientos/nest-conocimientos.component';
import { MySqlConocimientosComponent } from './utilities/my-sql-conocimientos/my-sql-conocimientos.component';
import { ReactConocimientosComponent } from './utilities/react-conocimientos/react-conocimientos.component';
import { LaravelConocimientosComponent } from './utilities/laravel-conocimientos/laravel-conocimientos.component';

@Component({
    selector: 'app-perfil',
    imports: [CardModule, PortalModule, DragDropModule, CommonModule, GraficaConocimientosComponent, AngularConocimientosComponent, NodeConocimientosComponent, NestConocimientosComponent, MySqlConocimientosComponent, ReactConocimientosComponent, LaravelConocimientosComponent],
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss', "../../../utilities/resourses.scss"]
})
export class PerfilComponent implements OnInit{
  // @ViewChild('angular', { static: true }) angular!: TemplateRef<any>;


  select:any;

  data:graficaConocimientos[] = [
    {
      name: "Angular",
      value: 80,
      bulletSettings: { src: "../../../../assets/angular.png" },
      number:1
    },
    {
      name: "Node js",
      value: 40,
      bulletSettings: { src: "../../../../assets/node.png" },
      number:2
    },
    {
      name: "nest js",
      value: 80,
      bulletSettings: { src: "../../../../assets/nest.png" },
      number:3
    },
    {
      name: "React",
      value: 45,
      bulletSettings: { src: "../../../../assets/react.png" },
      number:4
    },
    {
      name: "sql",
      value: 70,
      bulletSettings: { src: "../../../../assets/sql.png" },
      number:5
    },
    {
      name: "laravel",
      value: 85,
      bulletSettings: { src: "../../../../assets/laravel.png" },
      number:6
    }
  ];

  constructor(private cd: ChangeDetectorRef){}

  ngOnInit() {
    this.select = 1;
  }

  changeData(value:any){
    this.select = value;
    this.cd.detectChanges();
    console.log(this.select = value, "dato seleccionado en el output");

  }

}

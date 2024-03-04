import { Component, OnInit, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CardModule, PortalModule, DragDropModule,CommonModule ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{

  angularclick:boolean = true;
  laravelclick:boolean = false;

  constructor( ){}

  ngOnInit(): void {
    // this.prueba();
  }
 
  angular(){
    this.angularclick = true;
    this.laravelclick = false;
  }
  laravel(){
    this.laravelclick = true;
    this.angularclick = false;
  }

}

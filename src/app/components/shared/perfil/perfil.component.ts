import { Component, OnInit, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CardModule, PortalModule, DragDropModule ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{


  constructor( ){}

  ngOnInit(): void {
    // this.prueba();
  }
 

  

}

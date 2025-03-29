import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-perfil',
    standalone:true,
    imports: [CardModule, PortalModule, DragDropModule, CommonModule, ButtonModule],
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss', "../../../utilities/resourses.scss"]
})
export class PerfilComponent implements OnInit{
  
  conocimientos: any=[
    { ruta: 'angular', nombre: 'Angular', disable: false},
    { ruta: 'c#', nombre: 'c#', disable: true},
    { ruta: 'Flutter', nombre: 'Flutter', disable: true},
    { ruta: 'React', nombre: 'React', disable: true},
    { ruta: 'Java', nombre: 'Java', disable: true},
    { ruta: 'Nest', nombre: 'Nest js', disable: true},
    { ruta: 'NETCORE', nombre: '.NET CORE', disable: true},
    { ruta: 'MachineLearning', nombre: 'Machine Learning', disable: true}
  ]
  experiencia: any=[
    { ruta: 'pasteur', nombre: 'Distribuidora pasteur'},
    { ruta: 'garantiasComunitarias', nombre: 'Garantías comunitarias'},
    { ruta: 'confiarCooperativa', nombre: 'Confiar cooperativa financiera'}
  ]
  constructor(private router: Router){}

  ngOnInit() {
    // this.select = 1;
  }

  // changeData(value:any){
  //   this.select = value;
  //   this.cd.detectChanges();
  //   console.log(this.select = value, "dato seleccionado en el output");

  // }

  navigateTo(item:any){

    if(item.disable == true){
      return;
    }
    this.router.navigate([item.ruta]);
  }


}

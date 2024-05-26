import { AfterViewInit, Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiPruebaService } from '../../../../utilities/services/api-prueba.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { apiService } from '../../../../utilities/services/service.service';
import { RouterOutlet } from '@angular/router';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { map } from 'rxjs';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  providers:[
    HttpClientModule
  ],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.scss'
})

export class PruebasComponent implements OnInit,AfterViewInit,OnChanges{

  constructor(private servicio:apiService){}

  ngOnInit(): void {
    this.api();
    this.api2();
  }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  api2(){
    this.servicio.getCiudades().subscribe(res=>{
    const datosTransformados = res.message.resp;
    console.log(datosTransformados);
  });


  }

  api(){
    this.servicio.getCiudades().pipe(
      map(datos=>{

        return datos.message.resp.map((dato:any,index: number)=>({
          nombre: dato.nombre,
          capital: dato.capital,
          poblacion: dato.poblacion,
          poblacion2: dato.poblacion * 2,
          titulo: 'titulo'+(index+1)
        }));

  })).subscribe(res=>{
    const datosTransformados = res;
    console.log(datosTransformados);

  });


  }



}

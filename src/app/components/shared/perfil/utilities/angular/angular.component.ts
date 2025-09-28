import { AfterViewInit, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnDestroy, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { ModalOverlayService } from '../../../../../utilities/services/modal-overlay.service';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Project } from '../../../../../utilities/interfaces/projects';
import { ProjectsComponent } from '../../../../../utilities/componentesReutilizables/projects/projects.component';
import { ModalReutilizableComponent } from '../../../../../utilities/Modales/modal-reutilizable/modal-reutilizable.component';
import { InfoCompleta } from '../../../../../utilities/interfaces/modalReuzable';
// aca se importa esto en el componente que se requiere usar el swiper
// import { register, SwiperContainer } from 'swiper/element/bundle';
// import { SwiperOptions } from 'swiper/types';
import { BehaviorSubject, interval, startWith, Subscription, switchMap } from 'rxjs';
import { SwiperComponent } from '../../../../../utilities/componentesReutilizables/swiper/swiper.component';
import { TextoAMaquinaComponent } from '../../../../../utilities/componentesReutilizables/utilidades/texto-a-maquina/texto-a-maquina.component';
import { Conocimiento } from '../../../../../utilities/interfaces/conocimientos';
// register();

@Component({
  selector: 'app-angular',
  standalone:true,
  imports: [
    PortalModule,
    CommonModule,
    ProjectsComponent,
    ModalReutilizableComponent,
    SwiperComponent,
    TextoAMaquinaComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent implements OnInit {

  // swiperElement = signal<SwiperContainer | null>(null);

  @ViewChild('InfoAppGiff') InfoAppGiff: any;
  @ViewChild('InfoAppFiltrador') InfoAppFiltrador: any;
  @ViewChild('InfoAppFormApp') InfoAppFormApp: any;

  GifApp: InfoCompleta = {
    imagen: 'gifsApp.png',
    titulo: 'Buscador de gifs',
    subtitulo: 'gifs app',
    tituloConocimientos: 'Conocimientos Adquiridos',
    github: 'https://github.com/danielg598/GifsApp.git',
    conocimientos: [
      { tituloConocimiento: 'Comunicación entre componentes', posicion: 1 },
      { tituloConocimiento: 'Peticiones http', posicion: 2 }
    ],
    listaConocimientos: [
      { descripcion: 'Se utiliza el decorador input para pasar datos desde un componente padre a un componente hijo.', posicion: 1 },
      { descripcion: 'Se utiliza el decorador output se utiliza para emitir eventos desde un componente hijo hacia un componente padre.', posicion: 1 },
      { descripcion: 'Se crea un servicio para realizar peticiones http a un Api externa o Apis propias.', posicion: 2 },
      { descripcion: 'Se consume el servicio para suscribirnos al método que trae la información del Api y por parámetro se le manda la palabra que se desea buscar en el api de GHYPI.', posicion: 2 }
    ]
  };

  FiltroApp: InfoCompleta = {
    imagen: 'filtroPipe.png',
    titulo: 'Filtro pipe',
    subtitulo: 'app de filtrado',
    tituloConocimientos: 'Conocimientos Adquiridos',
    github: 'https://github.com/danielg598/buscadorPipe.git',
    conocimientos: [
      { tituloConocimiento: 'Transformación de datos', posicion: 1 },
      { tituloConocimiento: 'Manejo de arrays y objetos en JavaScript/TypeScript', posicion: 2 },
      { tituloConocimiento: 'Principios de programación funcional', posicion: 3 },
      { tituloConocimiento: 'Detección de cambios', posicion: 4 }
    ],
    listaConocimientos: [
      { descripcion: 'Se aprende cómo los pipes pueden transformar datos para su visualización sin alterar la estructura original de los datos. Esto es fundamental para operaciones como formatear fechas, números, y realizar filtrados dinámicos que solo afectan lo que el usuario ve en la pantalla.', posicion: 1 },
      { descripcion: 'Entender la diferencia entre pipes puros e impuros y cómo esto afecta el rendimiento de una aplicación.', posicion: 1 },
      { descripcion: 'Profundizar en el manejo de estructuras de datos para implementar la lógica de filtrado, utilizando métodos como filter(), map(), reduce(), entre otros.', posicion: 2 },
      { descripcion: 'Al implementar un pipe de filtrado, se refuerza mi comprensión de la programación funcional, ya que los pipes son un excelente ejemplo de este paradigma, donde se favorece la inmutabilidad y las funciones puras.', posicion: 3 },
      { descripcion: 'Aprendi cómo Angular gestiona la detección de cambios y cómo los pipes pueden influir en este proceso. Esto es clave para optimizar el rendimiento de tu aplicación, especialmente en listas grandes que requieren filtrado.', posicion: 4 }
    ]
  };

  FormularioReactivoApp: InfoCompleta = {
    imagen: 'formApp.png',
    titulo: 'Formularios reactivos',
    subtitulo: 'app de formularios reactivos',
    tituloConocimientos: 'Conocimientos Adquiridos',
    github: 'https://github.com/danielg598/formApp.git',
    conocimientos: [
      { tituloConocimiento: 'Creación de Formularios Simples', posicion: 1 },
      { tituloConocimiento: 'Formularios Dinámicos', posicion: 2 },
      { tituloConocimiento: 'Formularios con Arrays', posicion: 3 },
      { tituloConocimiento: 'Formularios con Switches', posicion: 4 },
      { tituloConocimiento: 'Validaciones Centralizadas', posicion: 5 },
      { tituloConocimiento: 'Manejo de Estado y Respuestas', posicion: 6 }
    ],
    listaConocimientos: [
      { descripcion: 'Aprendizaje sobre la utilización del ReactiveFormsModule y la creación de formularios utilizando FormControl y FormGroup para un control más detallado y programático de los datos del formulario.', posicion: 1 },
      { descripcion: 'Capacidad para construir formularios que se ajustan en tiempo real a las interacciones del usuario, usando FormArray para añadir o eliminar campos de forma dinámica según las necesidades del usuario.', posicion: 2 },
      { descripcion: 'Manejo de listas de datos dentro de los formularios, como tags o entradas múltiples, mediante FormArray, lo cual permite una estructura de datos más compleja y flexible.', posicion: 3 },
      { descripcion: 'Implementación de switches como controles dentro de los formularios, facilitando interfaces como activar/desactivar opciones, que son comunes en configuraciones y preferencias.', posicion: 4 },
      { descripcion: 'Uso de un servicio de validaciones donde se centralizan todas las reglas de validación de los formularios, lo que promueve la reutilización de código y facilita el mantenimiento del sistema de validación de la aplicación.', posicion: 5 },
      { descripcion: 'Aprendizaje en la gestión del estado de los formularios y la manipulación de las respuestas del servidor, para realizar acciones basadas en la validación y el procesamiento de los datos del formulario.', posicion: 6 }
    ]
  };

  // isLoading = true;
  isLoading$ = new BehaviorSubject<boolean>(true);


  projects: Project[] = [
    {
      title: 'Buscador de gifs',
      subtitle: 'gifs app',
      description: 'Comunicación entre componentes y API externo.',
      image: 'assets/gifsApp.png',
      link: 'https://jovial-profiterole-c79016.netlify.app/',
      iconFunction: () => this.infoAppGiffs()
    },
    {
      title: 'Filtro pipe',
      subtitle: 'app de filtrado',
      description: 'Filtrado de valores con Pipe y ngModel.',
      image: 'assets/filtroPipe.png',
      link: 'https://taupe-caramel-e8fa42.netlify.app/',
      iconFunction: () => this.filterPipe()
    },
    {
      title: 'FormApp',
      subtitle: 'app de formularios reactivos',
      description: 'Formularios reactivos con interfaces dinámicas.',
      image: 'assets/formApp.png',
      link: 'https://spontaneous-starburst-50214c.netlify.app',
      iconFunction: () => this.formApp()

    }
  ];

  skills: Conocimiento[]=[
    {ruta: 'rxjs', nombre: 'rxjs', disable: false, imagen: 'assets/rxjs.jpg', nombreImagen: 'rxjs', habilitarTexto: false},
    {ruta: 'ngrx', nombre: 'ngrx', disable: false, imagen: 'assets/ngrx.jpg', nombreImagen: 'ngrx', habilitarTexto: false},
    {ruta: 'formularios', nombre: 'formularios reactivos', disable: false, imagen: 'assets/formularios.jpg', nombreImagen: 'formularios reactivos', habilitarTexto: true, texto: 'Formularios reactivos con Angular'},
  ]

  texto = 'Desliza o haz clic en los botones del slider para explorar los distintos conocimientos y herramientas que domino trabajando con Angular. Desde arquitectura de componentes y servicios, hasta integración con APIs REST, manejo avanzado de RxJS, gestión de estado con NgRx, y estrategias efectivas de comunicación entre componentes.';


  constructor(private modal: ModalOverlayService) { }


  ngOnInit() {
    // Simular un tiempo de carga (por ejemplo, 2 segundos)
    setTimeout(() => {
      this.isLoading$.next(false);
    }, 2000);

    

  }


  private infoAppGiffs() {
    this.modal.openOverlay(this.InfoAppGiff);

  }
  private filterPipe() {
    this.modal.openOverlay(this.InfoAppFiltrador);
  }
  private formApp() {
    this.modal.openOverlay(this.InfoAppFormApp);
  }
}

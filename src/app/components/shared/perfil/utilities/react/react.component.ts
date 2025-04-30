import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../../../utilities/interfaces/projects';
import { CommonModule } from '@angular/common';
import { ModalOverlayService } from '../../../../../utilities/services/modal-overlay.service';
import { PortalModule } from '@angular/cdk/portal';
import { ProjectsComponent } from '../../../../../utilities/componentesReutilizables/projects/projects.component';
import { ModalReutilizableComponent } from '../../../../../utilities/Modales/modal-reutilizable/modal-reutilizable.component';
import { InfoCompleta } from '../../../../../utilities/interfaces/modalReuzable';

@Component({
    selector: 'app-react-conocimientos',
    standalone: true,
    imports: [
        CommonModule,
        PortalModule,
        ProjectsComponent,
        ModalReutilizableComponent
    ],
    templateUrl: './react.component.html',
    styleUrls: ['./react.component.scss', '../../../../../utilities/resourses.scss']
})
export class ReactComponent implements OnInit {
    @ViewChild('calendario') calendary: any;

    isLoading = true;
    projectProduction: boolean = false;

    appCalendario: InfoCompleta = {
        imagen: 'calendarApp.jpg',
        titulo: 'Calendar App',
        subtitulo: 'App calendario y login',
        tituloConocimientos: 'Conocimientos Adquiridos',
        github: 'https://github.com/danielg598/calendarApp',
        conocimientos: [
            { tituloConocimiento: 'React.js', posicion: 1 },
            { tituloConocimiento: 'JSX', posicion: 2 },
            { tituloConocimiento: 'Gestión de estado reactiva', posicion: 3 },
            { tituloConocimiento: 'Integración de librerías de terceros', posicion: 4 },
            { tituloConocimiento: 'Consumo de APIs REST', posicion: 5 },
            { tituloConocimiento: 'Arquitectura y patrones', posicion: 6 },
            { tituloConocimiento: 'Manejo de formularios', posicion: 7 },
            { tituloConocimiento: 'Ruteo y navegación', posicion: 8 },
            { tituloConocimiento: 'Control de versiones', posicion: 9 },
            { tituloConocimiento: 'Buenas prácticas', posicion: 10 }
        ],
        listaConocimientos: [
            { descripcion: 'Creación de componentes funcionales.', posicion: 1 },
            { descripcion: 'Uso de Hooks (useState, useEffect, etc.).', posicion: 1 },
            { descripcion: 'Estructuración modular de la interfaz.', posicion: 1 },
            { descripcion: 'Uso de sintaxis JSX para definir interfaces declarativas.', posicion: 2 },
            { descripcion: 'RxJS: manejo de flujos de datos reactivos con Observables.', posicion: 3 },
            { descripcion: 'Uso de una librería de calendario como react-big-calendar', posicion: 4 },
            { descripcion: 'Customización del calendario para eventos, visualización, y manejo de fechas.', posicion: 4 },
            { descripcion: 'Peticiones HTTP usando fetch o axios.', posicion: 5 },
            { descripcion: 'Gestión del ciclo de vida de la carga (loading, error, data).', posicion: 5 },
            { descripcion: 'Separación de lógica de presentación y lógica de negocio.', posicion: 6 },
            { descripcion: 'Patrones de arquitectura reactiva y control centralizado del estado.', posicion: 6 },
            { descripcion: 'Creación de formularios para crear o editar eventos.', posicion: 7 },
            { descripcion: 'Validación de entradas del usuario.', posicion: 7 },
            { descripcion: 'React Router: navegación entre vistas como calendario, login, etc.', posicion: 8 },
            { descripcion: 'Uso de Git y GitHub para control de versiones y colaboración.', posicion: 9 },
            { descripcion: 'Código limpio y reutilizable.', posicion: 10 },
            { descripcion: 'Manejo de errores.', posicion: 10 },
            { descripcion: 'Buenas prácticas con el estado inmutable.', posicion: 10 }
        ]
    };

    projects: Project[] = [
        {
            title: 'Calendario',
            subtitle: 'aplicación de calendario',
            description: 'NGRX Y RXJS',
            image: 'assets/calendarApp.jpg',
            // link: 'https://jovial-profiterole-c79016.netlify.app/',
            iconFunction: () => this.calendario()
        }
    ]

    constructor(private modal: ModalOverlayService) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }

    calendario() {
        this.modal.openOverlay(this.calendary);
    }

}

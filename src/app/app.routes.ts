import { Routes } from '@angular/router';
import { ComunicacionEntreComponentesComponent } from './components/shared/comunicacion-entre-componentes/comunicacion-entre-componentes.component';
import { ComunicacionApiComponent } from './components/shared/comunicacion-api/comunicacion-api.component';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { EstudiosComponent } from './components/shared/estudios/estudios.component';
import { ExperienciaComponent } from './components/shared/experiencia/experiencia.component';

export const routes: Routes = [
    {
        path:'sobreMi',
        component: PerfilComponent
    },
    {
        path:'estudios',
        component: EstudiosComponent
    },
    {
        path:'experiencia',
        component: ExperienciaComponent
    },
    {
        path:'comunicacionEntreComponentes',
        component: ComunicacionEntreComponentesComponent
    },
    {
        path:'api',
        component: ComunicacionApiComponent
    },
    {
        path:'**',
        redirectTo: 'home'
    }
];

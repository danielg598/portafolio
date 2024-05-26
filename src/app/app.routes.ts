import { Routes } from '@angular/router';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { ExperienciaComponent } from './components/shared/experiencia/experiencia.component';
import { AngularComponent } from './components/shared/proyectos/angular/angular.component';
import { PruebasComponent } from './components/shared/pruebas/pruebas/pruebas.component';

export const routes: Routes = [
    {
        path:'sobreMi',
        component: PerfilComponent
    },
    {
        path:'experiencia',
        component: ExperienciaComponent
    },
    {
        path:'angular',
        component: AngularComponent
    },
    {
      path:'pruebas',
      component: PruebasComponent
    },
    {
        path:'**',
        redirectTo: 'sobreMi'
    }
];

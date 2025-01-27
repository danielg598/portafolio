import { Routes } from '@angular/router';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { AngularComponent } from './components/shared/proyectos/angular/angular.component';
import { FlutterComponent } from './components/shared/perfil/utilities/flutter/flutter.component';
import { NetcoreComponent } from './components/shared/perfil/utilities/netcore/netcore.component';
import { JavaComponent } from './components/shared/perfil/utilities/java/java.component';
import { ReactConocimientosComponent } from './components/shared/perfil/utilities/react-conocimientos/react-conocimientos.component';
import { MachineLearningComponent } from './components/shared/perfil/utilities/machine-learning/machine-learning.component';
import { NestConocimientosComponent } from './components/shared/perfil/utilities/nest-conocimientos/nest-conocimientos.component';
import { PasteurComponent } from './components/shared/experiencia/pasteur/pasteur.component';
import { GarantiasComunitariasComponent } from './components/shared/experiencia/garantias-comunitarias/garantias-comunitarias.component';
import { ConfiarCooperativaComponent } from './components/shared/experiencia/confiar-cooperativa/confiar-cooperativa.component';

export const routes: Routes = [
    {
        path:'sobreMi',
        component: PerfilComponent
    },
    {
        path:'pasteur',
        component: PasteurComponent
    },
    {
        path:'garantiasComunitarias',
        component: GarantiasComunitariasComponent
    },
    {
        path:'confiarCooperativa',
        component: ConfiarCooperativaComponent
    },
    {
        path:'angular',
        component: AngularComponent
    },
    {
        path:'Flutter',
        component: FlutterComponent
    },
    {
        path:'NETCORE',
        component: NetcoreComponent
    },
    {
        path:'Java',
        component: JavaComponent
    },
    {
        path:'React',
        component: ReactConocimientosComponent
    },
    {
        path:'MachineLearning',
        component: MachineLearningComponent
    },
    {
        path:'Nest',
        component: NestConocimientosComponent
    },
    {
        path:'**',
        redirectTo: 'sobreMi'
    }
];

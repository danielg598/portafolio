import { Routes } from '@angular/router';
import { NetcoreComponent } from './components/shared/perfil/utilities/netcore/netcore.component';
import { JavaComponent } from './components/shared/perfil/utilities/java/java.component';
import { ReactComponent } from './components/shared/perfil/utilities/react/react.component';
import { MachineLearningComponent } from './components/shared/perfil/utilities/machine-learning/machine-learning.component';
import { NestJsComponent } from './components/shared/perfil/utilities/nestJs/nest-conocimientos.component';
import { PasteurComponent } from './components/shared/experiencia/pasteur/pasteur.component';
import { GarantiasComunitariasComponent } from './components/shared/experiencia/garantias-comunitarias/garantias-comunitarias.component';
import { ConfiarCooperativaComponent } from './components/shared/experiencia/confiar-cooperativa/confiar-cooperativa.component';
import { CsharpComponent } from './components/shared/perfil/utilities/csharp/csharp.component';
import { AngularComponent } from './components/shared/perfil/utilities/angular/angular.component';
import { FlutterComponent } from './components/shared/perfil/utilities/flutter/flutter.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { RxjsComponent } from './components/shared/conocimientos/rxjs/rxjs.component';
import { NgrxComponent } from './components/shared/conocimientos/ngrx/ngrx.component';
import { FormulariosComponent } from './components/shared/conocimientos/formularios/formularios.component';

export const routes: Routes = [
    {
        path:'sobreMi',
        // component: PerfilComponent
        loadChildren: () =>
            import('../app/components/shared/perfil/perfil.routes').then(m => m.perfilRoutes)
    },
    {
        path:'rxjs',
        component: RxjsComponent
    },
    {
        path:'ngrx',
        component: NgrxComponent
    },
    {
        path:'formularios',
        component: FormulariosComponent
    },
    {
        path:'pasteur',
        component: PasteurComponent
    },
    {
        path:'cSharp',
        component: CsharpComponent
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
        component: ReactComponent
    },
    {
        path:'MachineLearning',
        component: MachineLearningComponent
    },
    {
        path:'Nest',
        component: NestJsComponent
    },
    {
        path:'Contact',
        component: ContactoComponent
    },
    {
        path:'**',
        redirectTo: 'sobreMi'
    }
];

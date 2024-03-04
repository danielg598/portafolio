import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ComunicacionEntreComponentesComponent } from '../shared/comunicacion-entre-componentes/comunicacion-entre-componentes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.menu();
  }

  menu(){
      this.items = [
        {
            label: 'Sobre mi',
            routerLink: ['sobreMi']
            // icon: 'pi pi-fw pi-user',
            // items: [
            //     {
            //         label: 'Sobre mi',
            //         icon: 'pi pi-fw pi-box',
            //         routerLink: ['sobreMi']
            //     },
            //     {
            //         separator: true
            //     },
            //     {
            //         label: 'Estudios y conocimientos',
            //         icon: 'pi pi-fw pi-box',
            //         routerLink: ['estudios']
            //     },
            //     {
            //         separator: true
            //     },
            //     {
            //         label: 'Experiencia',
            //         icon: 'pi pi-fw pi-box',
            //         routerLink: ['experiencia']
            //     }
            // ]
        },
        {
            label: 'Proyectos',
            routerLink: ['api']
            // icon: 'pi pi-fw pi-pencil',
            // items: [
            //     {
            //         label: 'Api',
            //         icon: 'pi pi-fw pi-server',
            //         routerLink: ['api']
            //     },
            //     {
            //         separator: true
            //     },
            // ]
        }
    ];
  }
}



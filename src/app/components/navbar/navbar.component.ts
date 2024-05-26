import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
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

        },
        // {
        //   label: 'pruebas',
        //   routerLink: ['pruebas']

        // },
        {
          label: 'proyectos',
          items:[
            {
              label:'Angular',
              routerLink:['angular']
            }
          ]
        }
    ];
  }
}



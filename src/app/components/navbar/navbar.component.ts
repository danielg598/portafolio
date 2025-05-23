import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
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
        {
          label: 'Contactame',
          routerLink: ['Contact']
        },
        // {
        //   label: 'proyectos',
        //   items:[
        //     {
        //       label:'Angular',
        //       routerLink:['angular']
        //     }
        //   ]
        // }
    ];
  }
}



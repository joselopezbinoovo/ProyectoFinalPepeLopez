import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  constructor() {
     this.items = [
            {
                label:'home',
                icon:'pi pi-fw pi-home',
                routerLink: ['/pagename'],
            },
            {
                label:'Productos',
                items:[
                    {
                        label:'Compresores',
                        icon:'pi pi-fw pi-align-left',
                        routerLink: ['/pagename'],
                    },
                    {
                        label:'Magnetos',
                        icon:'pi pi-fw pi-align-right',
                        routerLink: ['/pagename'],
                    },
                    {
                        label:'Diferenciales',
                        icon:'pi pi-fw pi-align-center',
                        routerLink: ['/pagename'],
                    },
                ]
            },
            {
                label:'Sobre Nosotros',
            },
            {
                label:'Contacto',
                icon:'pi pi-fw pi-calendar',
            },
            {
              icon:'pi pi-fw pi-user',
              items:[
                  {
                      label:'MyProfile',
                  }
              ]
          },
        ];
   }

  ngOnInit(): void {
    

    
  }

}

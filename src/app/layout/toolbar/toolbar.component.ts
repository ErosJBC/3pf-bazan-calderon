import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navToolbar = [
    {
      name: 'Perfil',
      icon: 'fa-solid fa-user'
    },
    {
      name: 'Configuración',
      icon: 'fa-solid fa-gear'
    }
  ]
  
  logoToolbar = {
    name: 'Dragon Beat',
    icon: 'fa-solid fa-dragon'
  }

  constructor() { 
    this.navToolbar
    this.logoToolbar
  }

  ngOnInit(): void {
  }

}

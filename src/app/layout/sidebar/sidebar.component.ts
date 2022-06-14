import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  itemsSidebar = [
    {
      name: 'Dashboard',
      icon: 'fa-solid fa-grip',
      path: '/panel/dashboard'
    },
    {
      name: 'Notas',
      icon: 'fa-solid fa-clipboard',
      path: '/panel/notes'
    },
    {
      name: 'Cursos',
      icon: 'fa-solid fa-folder',
      path: '/panel/courses'
    },
    {
      name: 'Alumnos',
      icon: 'fa-solid fa-user-graduate',
      path: '/panel/students'
    }
  ]

  constructor() {
    this.itemsSidebar
    
  }

  ngOnInit(): void {
  }

}

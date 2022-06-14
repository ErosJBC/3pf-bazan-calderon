import { Component, OnInit } from '@angular/core';
import ItemCards from '../../../utils/itemsCard';
import { Card } from '../../../models/card.model';
import { InfoCard } from '../../../models/infocard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  listCard: Card[] = ItemCards
  listInfo: InfoCard[] = [
    {title: 'Total Estudiantes', content: 0, background: 'bg-amber-100'},
    {title: 'Total Aprobados', content: 0, background: 'bg-amber-100'},
    {title: 'Total Desaprobados', content: 0, background: 'bg-amber-100'}
  ]
  
  constructor() {
    this.loadLocalStorage()
  }

  ngOnInit(): void {

  }

  loadLocalStorage(): void {
    if (localStorage.getItem('infoStudents') === null) localStorage.setItem('infoStudents', JSON.stringify(this.listInfo))
    this.listInfo = JSON.parse(localStorage.getItem('infoStudents'))
  }
}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NotesStudent } from '../../../models/notesStudent.model'
import { InfoCard } from '../../../models/infocard.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  notesStudents: NotesStudent[] = []
  infoStudents: InfoCard[] = []
  formStudent: NotesStudent = new NotesStudent()
  tableColumns = ['id', 'lastname', 'name', 'course', 'pc1', 'pc2', 'pc3', 'pc4', 'pp', 'ep', 'ef', 'final', 'condition']
  dataStudents = new MatTableDataSource<NotesStudent>()

  constructor() {
    this.loadLocalStorage()
    this.dataStudents.data = this.notesStudents
  }

  ngAfterViewInit(): void {
    this.dataStudents.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  add(prevValue: number, nextValue: number): number { return (prevValue + nextValue) };

  addStudent(): void {
    const pcs: number[] = [parseInt(this.formStudent.pc1), parseInt(this.formStudent.pc2), parseInt(this.formStudent.pc3), parseInt(this.formStudent.pc4)]
    console.log(pcs)
    this.formStudent.avgPP = ((pcs.reduce(this.add) - Math.min(...pcs))/pcs.length - 1).toString()
    this.formStudent.finalScore = ((parseFloat(this.formStudent.avgPP) + parseFloat(this.formStudent.partialExam) + 2 * parseFloat(this.formStudent.finalExam))/4).toString()
    this.formStudent.condition = (parseFloat(this.formStudent.finalScore) >= 11 ? 'Aprobado' : 'Desaprobado')
    this.formStudent.isPassed = (parseFloat(this.formStudent.finalScore) >= 11 ? true : false)
    this.notesStudents.push(this.formStudent)
    this.formStudent = new NotesStudent()
    this.generateInformation()
    this.saveLocalStorage()
    this.dataStudents.paginator = this.paginator;
  }

  saveLocalStorage(): void {
    localStorage.setItem('notesStudents', JSON.stringify(this.notesStudents))
    localStorage.setItem('infoStudents', JSON.stringify(this.infoStudents))
  }

  loadLocalStorage(): void {
    if (localStorage.getItem('notesStudents') === null) localStorage.setItem('notesStudents', JSON.stringify(this.notesStudents))
    this.notesStudents  = JSON.parse(localStorage.getItem('notesStudents'))
  }

  calculateInformation(): [number, number, number] {
    let totalStudents: number, approveStudents: number = 0, disapproveStudents: number = 0
    totalStudents = this.notesStudents.length
    this.notesStudents.map(student => {
      if (student.isPassed) approveStudents++
      else disapproveStudents++
    })
    return [totalStudents, approveStudents, disapproveStudents]
  }

  generateInformation(): void {
    const [totalStudents, approveStudents, disapproveStudents] = this.calculateInformation()
    this.infoStudents.push({title: 'Total Estudiantes', content: totalStudents, background: 'bg-indigo-200' })
    this.infoStudents.push({title: 'Total Aprobados', content: approveStudents, background: 'bg-emerald-300' })
    this.infoStudents.push({title: 'Total Desaprobados', content: disapproveStudents, background: 'bg-rose-300' })
  }

}

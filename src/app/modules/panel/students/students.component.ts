import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Student } from 'src/app/models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InfostudentComponent } from './infostudent/infostudent.component';
import { ModalEditStudentComponent } from '../../../components/form-students/modal-edit-student/modal-edit-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, AfterViewInit {

  student: Student = { id: '', firstLastname: '', secondLastname: '', names: '', cycle: '', faculty: '', specialty: '', condition: '' }
  
  students: Student[] = []
  tableColumns = ['id', 'firstLastname', 'secondLastname', 'names', 'specialty', 'cycle', 'actions']
  emptyTable: boolean

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  
  dataStudents = new MatTableDataSource<Student>()
  
  constructor(public modal: MatDialog) {
    this.loadLocalStorage()
    this.loadDataStudents()
  }

  ngAfterViewInit(): void {
    this.dataStudents.paginator = this.paginator
    this.dataStudents.sort = this.sort
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataStudents.filter = filterValue.trim().toLowerCase()

    if (this.dataStudents.paginator) {
      this.dataStudents.paginator.firstPage()
    }
  }

  getDataStudent(student: Student): void {
    this.students.push(student)
    this.dataStudents.data = this.students
    this.saveLocalStorage()
  }

  loadDataStudents(): void {
    this.dataStudents.data = this.students
    this.emptyTable = this.dataStudents.data.length !== 0 ? true : false
  }

  saveLocalStorage(): void {
    localStorage.setItem('students', JSON.stringify(this.students))
  }

  loadLocalStorage(): void {
    if (localStorage.getItem('students') === null) localStorage.setItem('students', JSON.stringify(this.students))
    this.students = JSON.parse(localStorage.getItem('students'))
  }

  seeStudent(id: string): void {
    const modalSee = this.modal.open(InfostudentComponent, {
      width: '40rem',
      data: this.students.filter((student) => student.id === id)[0]
    })
  }

  editStudent(id: string): void {
    const modalRef = this.modal.open(ModalEditStudentComponent, {
      width: '50rem',
      data: this.dataStudents.data.filter((student) => student.id === id)[0]
    })

    modalRef.afterClosed().subscribe(result => {
      const dataStudent = result
      if (dataStudent !== undefined && dataStudent.id !== '') {
        dataStudent.firstLastname = dataStudent.firstLastname.toUpperCase()
        dataStudent.secondLastname = dataStudent.secondLastname.toUpperCase()
        dataStudent.names = dataStudent.names.toUpperCase()
        this.student = dataStudent
        for(let i = 0; i < this.students.length; i++){
          if (this.students[i].id === this.student.id) {
            this.students[i] = this.student
            break
          }
        }
      }
      this.student = { id: '', firstLastname: '', secondLastname: '', names: '', cycle: '', faculty: '', specialty: '', condition: '' }

      this.saveLocalStorage()
      this.loadLocalStorage()
      this.loadDataStudents()
    })
  }

  deleteStudent(id: string): void {
    const newArrayStudents = this.students.filter((student) => student.id !== id)
    console.log(newArrayStudents)
    this.saveLocalStorage()
    this.loadLocalStorage()
    this.loadDataStudents()
  }
}

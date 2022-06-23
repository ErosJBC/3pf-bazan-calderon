import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Student } from 'src/app/models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InfostudentComponent } from './infostudent/infostudent.component';
import { ModalEditStudentComponent } from '../../../components/form-students/modal-edit-student/modal-edit-student.component';
import { StudentsService } from '../../../services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, AfterViewInit {

  students: Student[] = []

  tableColumns = ['codeStudent', 'firstLastname', 'secondLastname', 'names', 'specialty', 'cycle', 'actions']
  emptyTable: boolean

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  dataStudents = new MatTableDataSource<Student>()

  constructor(public modal: MatDialog, private studentsService: StudentsService) {
  }

  ngAfterViewInit(): void {
    this.dataStudents.paginator = this.paginator
    this.dataStudents.sort = this.sort
  }

  ngOnInit(): void {
    this.getStudents()
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataStudents.filter = filterValue.trim().toLowerCase()

    if (this.dataStudents.paginator) {
      this.dataStudents.paginator.firstPage()
    }
  }

  getStudents = async () => {
    await this.studentsService.getStudentsList().toPromise().then(
      (data) => {
        data.sort((stA, stB) => {
          if (stA.firstLastname > stB.firstLastname) return 1
          if (stA.firstLastname < stB.firstLastname) return -1
          return 0
        })
        this.dataStudents.data = data
      }
    )
  }

  addStudent(student: Student): void {
    this.studentsService.createStudent(student).subscribe(
      (data) => {
        this.getStudents()
      }
    )
  }

  seeStudent = async (id: string) => {
    let student: Student
    await this.studentsService.getStudent(id).toPromise().then(
      (data) => {
        student = data
      }
    )
    const modalSee = this.modal.open(InfostudentComponent, {
      width: '40rem',
      data: student
    })
  }

  editStudent = async (id: string) => {
    let student: Student
    await this.studentsService.getStudent(id).toPromise().then(
      (data) => {
        student = data
      }
    )

    const modalRef = this.modal.open(ModalEditStudentComponent, {
      width: '50rem',
      data: student
    })

    modalRef.afterClosed().subscribe(result => {
      student = result
      if (student !== undefined && student.codeStudent !== '') {
        student.firstLastname = student.firstLastname.toUpperCase()
        student.secondLastname = student.secondLastname.toUpperCase()
        student.names = student.names.toUpperCase()
      }

      this.studentsService.updateStudent(student, id).subscribe(
        (data) => {
          this.getStudents()
        }
      )
    })
  }

  deleteStudent(id: string): void {
    this.studentsService.deleteStudent(id).toPromise().then(
      (data) => {
        this.getStudents()
      }
    )
  }
}

import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditCourseComponent } from '../../../components/form-courses/modal-edit-course/modal-edit-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  course = {
    id: '',
    nameCourse: '',
    credits: '',
    typeEvaluation: '',
    sectionTotal: '',
    vacantTotal: ''
  }

  courses: Course[] = []
  tableColumns = ['id', 'nameCourse', 'credits', 'typeEvaluation', 'sectionTotal', 'vacantTotal', 'actions']
  emptyTable: boolean

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  dataCourses = new MatTableDataSource<Course>()

  constructor(public modal: MatDialog) {
    this.loadLocalStorage()
    this.loadDataCourses()
  }

  ngAfterViewInit(): void {
    this.dataCourses.paginator = this.paginator
    this.dataCourses.sort = this.sort
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataCourses.filter = filterValue.trim().toLowerCase()

    if (this.dataCourses.paginator) {
      this.dataCourses.paginator.firstPage()
    }
  }

  getDataCourse(course: Course): void {
    this.courses.push(course)
    this.dataCourses.data = this.courses
    this.saveLocalStorage()
  }

  loadDataCourses(): void {
    this.emptyTable = false
    this.dataCourses.data = this.courses
    this.emptyTable = this.dataCourses.data.length !== 0 ? true : false
  }

  saveLocalStorage(): void {
    localStorage.setItem('courses', JSON.stringify(this.courses))
  }

  loadLocalStorage(): void {
    if (localStorage.getItem('courses') === null) localStorage.setItem('courses', JSON.stringify(this.courses))
    this.courses = JSON.parse(localStorage.getItem('courses'))
  }

  editCourse(id: string): void {
    const modalRef = this.modal.open(ModalEditCourseComponent, {
      width: '50rem',
      data: this.dataCourses.data.filter((course) => course.id === id)[0]
    })

    modalRef.afterClosed().subscribe(result => {
      const dataCourse = result
      if (dataCourse !== undefined && dataCourse.id !== '') {
        dataCourse.nameCourse = dataCourse.nameCourse.toUpperCase()
        this.course = dataCourse
        for(let i = 0; i < this.courses.length; i++){
          if (this.courses[i].id === this.course.id) {
            this.courses[i] = this.course
            break
          }
        }
      }
      this.course = { id: '', nameCourse: '', credits: '', typeEvaluation: '', sectionTotal: '', vacantTotal: '' }

      this.saveLocalStorage()
      this.loadLocalStorage()
      this.loadDataCourses()
    })
  }

  deleteCourse(id: string): void {
    const newArrayStudents = this.courses.filter((course) => course.id !== id)
    this.courses = newArrayStudents
    this.saveLocalStorage()
    this.loadLocalStorage()
    this.loadDataCourses()
  }

}

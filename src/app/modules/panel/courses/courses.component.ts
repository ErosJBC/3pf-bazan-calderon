import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditCourseComponent } from '../../../components/form-courses/modal-edit-course/modal-edit-course.component';
import { CoursesService } from '../../../services/courses/courses.service';

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
  tableColumns = ['codeCourse', 'nameCourse', 'credits', 'typeEvaluation', 'sectionTotal', 'vacantTotal', 'actions']
  emptyTable: boolean

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  dataCourses = new MatTableDataSource<Course>()

  constructor(public modal: MatDialog, private coursesService: CoursesService) {
  }

  ngAfterViewInit(): void {
    this.dataCourses.paginator = this.paginator
    this.dataCourses.sort = this.sort
  }

  ngOnInit(): void {
    this.getCourses()
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataCourses.filter = filterValue.trim().toLowerCase()

    if (this.dataCourses.paginator) {
      this.dataCourses.paginator.firstPage()
    }
  }

  getCourses = async () => {
    await this.coursesService.getCoursesList().toPromise().then(
      (data) => {
        data.sort((crA, crB) => {
          if (crA.nameCourse > crB.nameCourse) return 1
          if (crA.nameCourse < crB.nameCourse) return -1
          return 0
        })
        this.dataCourses.data = data
      }
    )
  }

  addCourse(course: Course): void {
    this.coursesService.createCourse(course).subscribe(
      (data) => {
        this.getCourses()
      }
    )
  }

  // loadDataCourses(): void {
  //   this.emptyTable = false
  //   this.dataCourses.data = this.courses
  //   this.emptyTable = this.dataCourses.data.length !== 0 ? true : false
  // }

  // saveLocalStorage(): void {
  //   localStorage.setItem('courses', JSON.stringify(this.courses))
  // }

  // loadLocalStorage(): void {
  //   if (localStorage.getItem('courses') === null) localStorage.setItem('courses', JSON.stringify(this.courses))
  //   this.courses = JSON.parse(localStorage.getItem('courses'))
  // }

  editCourse = async (id: string) => {
    let course: Course
    await this.coursesService.getCourse(id).toPromise().then(
      (data) => {
        course = data
      }
    )
    const modalRef = this.modal.open(ModalEditCourseComponent, {
      width: '50rem',
      data: course
    })

    modalRef.afterClosed().subscribe(result => {
      course = result
      if (course !== undefined && course.codeCourse !== '') {
        course.nameCourse = course.nameCourse.toUpperCase()
      }
      this.coursesService.updateCourse(course, id).subscribe(
        (data) => {
          this.getCourses()
        }
      )
    })
  }

  deleteCourse(id: string): void {
    this.coursesService.deleteCourse(id).toPromise().then(
      (data) => {
        this.getCourses()
      }
    )
  }
}

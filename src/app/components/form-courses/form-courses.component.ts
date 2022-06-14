import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisterCourseComponent } from './modal-register-course/modal-register-course.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.scss']
})
export class FormCoursesComponent implements OnInit {
  @Output() registerCourse = new EventEmitter<Course>()

  course: Course = {
    id: '',
    nameCourse: '',
    credits: '',
    typeEvaluation: '',
    sectionTotal: '',
    vacantTotal: ''
  }

  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
  }

  openFormStudent(): void {
    const modalRef = this.modal.open(ModalRegisterCourseComponent, {
      width: '50rem',
      data: this.course
    })

    modalRef.afterClosed().subscribe(result => {
      const dataCourse = result
      if (dataCourse !== undefined && dataCourse.id !== '') {
        dataCourse.nameCourse = dataCourse.nameCourse.toUpperCase()
        this.registerCourse.emit(dataCourse)
      }

      this.course = {
        id: '',
        nameCourse: '',
        credits: '',
        typeEvaluation: '',
        sectionTotal: '',
        vacantTotal: ''
      }
    })
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material.module';

import { FormLoginComponent } from './form-login/form-login.component';
import { CardComponent } from './card/card.component';
import { InfocardComponent } from './infocard/infocard.component';
import { FormCoursesComponent } from './form-courses/form-courses.component';
import { FormStudentsComponent } from './form-students/form-students.component';
import { ModalRegisterComponent } from './form-students/modal-register/modal-register.component';
import { ModalRegisterCourseComponent } from './form-courses/modal-register-course/modal-register-course.component';
import { ModalEditCourseComponent } from './form-courses/modal-edit-course/modal-edit-course.component';
import { ModalEditStudentComponent } from './form-students/modal-edit-student/modal-edit-student.component';


@NgModule({
  declarations: [
    CardComponent,
    InfocardComponent,
    FormLoginComponent,
    FormCoursesComponent,
    FormStudentsComponent,
    ModalRegisterComponent,
    ModalRegisterCourseComponent,
    ModalEditCourseComponent,
    ModalEditStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormLoginComponent,
    FormCoursesComponent,
    FormStudentsComponent,
    CardComponent,
    InfocardComponent,
    MaterialModule
  ]
})
export class ComponentModule { }
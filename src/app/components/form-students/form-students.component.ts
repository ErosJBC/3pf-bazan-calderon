import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { ModalRegisterComponent } from './modal-register/modal-register.component';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.scss']
})
export class FormStudentsComponent implements OnInit {
  @Output() registerStudent = new EventEmitter<Student>()

  student: Student = {
    id: '',
    firstLastname: '',
    secondLastname: '',
    names: '',
    cycle: '',
    faculty: '',
    specialty: '',
    condition: ''
  }

  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
  }

  openFormStudent(): void {
    const modalRef = this.modal.open(ModalRegisterComponent, {
      width: '50rem',
      data: this.student
    })

    modalRef.afterClosed().subscribe(result => {
      const dataStudent = result
      if (dataStudent !== undefined && dataStudent.id !== '') {
        dataStudent.firstLastname = dataStudent.firstLastname.toUpperCase()
        dataStudent.secondLastname = dataStudent.secondLastname.toUpperCase()
        dataStudent.names = dataStudent.names.toUpperCase()
        this.registerStudent.emit(dataStudent)
      }

      this.student = {
        id: '',
        firstLastname: '',
        secondLastname: '',
        names: '',
        cycle: '',
        faculty: '',
        specialty: '',
        condition: ''
      }
    })
  }
}

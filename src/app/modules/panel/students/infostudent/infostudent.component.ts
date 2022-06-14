import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../../models/student.model';

@Component({
  selector: 'app-infostudent',
  templateUrl: './infostudent.component.html',
  styleUrls: ['./infostudent.component.scss']
})
export class InfostudentComponent implements OnInit {

  student: Student
  constructor(public modalRef: MatDialogRef<InfostudentComponent>, @Inject(MAT_DIALOG_DATA) public st: Student) { }

  ngOnInit(): void {
    this.student = this.st
  }

}

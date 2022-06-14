import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-modal-edit-course',
  templateUrl: './modal-edit-course.component.html',
  styleUrls: ['./modal-edit-course.component.scss']
})
export class ModalEditCourseComponent implements OnInit {

  credits: String[] = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6']
  typeEvaluation: String[] = ['A', 'B', 'D', 'F', 'G', 'I', 'J', 'M', 'N', 'U', 'Z']
  sectionTotal: String[] = ['1', '2', '3', '4', '5']
  vacantTotal: String[] = ['20', '25', '30', '35', '40', '45']
  
  constructor(public modalRef: MatDialogRef<ModalEditCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: Course) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.modalRef.close()
  }

}

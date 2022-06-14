import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-edit-student',
  templateUrl: './modal-edit-student.component.html',
  styleUrls: ['./modal-edit-student.component.scss']
})
export class ModalEditStudentComponent implements OnInit {

  conditions: String[] = ['ALUMNO REGULAR', 'EGRESADO', 'SUSPENDIDO']
  cycles: String[] = ['1er', '2do', '3er', '4to', '5to', '6to', '7mo', '8vo', '9no', '10mo', '-']
  faculties: String[] = [
    'INGENIERIA DE PETROLEO, GAS NATURAL Y PETROQUIMICA',
    'INGENIERIA INDUSTRIAL Y DE SISTEMAS',
    'INGENIERIA MECÁNICA',
    'INGENIERIA QUÍMICA Y TEXTIL',
    'ARQUITECTURA, URBANISMO Y ARTES',
    'INGENIERIA CIVIL',
    'CIENCIAS',
    'INGENIERIA ELECTRICA Y ELECTRONICA',
    'INGENIERIA GEOLOGICA, MINERA Y METALURGICA',
    'INGENIERIA ECONOMICA, ESTADISTICA Y CIENCIAS SOCIALES',
    'INGENIERIA AMBIENTAL'
  ]
  specialties: String[] = [
    'ARQUITECTURA',
    'INGENIERIA CIVIL',
    'INGENIERIA ECONOMICA',
    'INGENIERIA ESTADISTICA',
    'INGENIERIA GEOLOGICA',
    'INGENIERIA METALURGICA',
    'INGENIERIA DE MINAS',
    'INGENIERIA INDUSTRIAL',
    'INGENIERIA DE SISTEMAS',
    'INGENIERIA ELECTRICA',
    'INGENIERIA ELECTRONICA',
    'INGENIERIA DE TELECOMUNICACIONES',
    'INGENIERIA MECANICA',
    'INGENIERIA MECANICA Y ELECTRICA',
    'INGENIERIA NAVAL',
    'INGENIERIA MECATRONICA',
    'FISICA',
    'MATEMATICA',
    'QUIMICA',
    'INGENIERIA FISICA',
    'CIENCIA DE LA COMPUTACION',
    'INGENIERIA PETROQUIMICA',
    'INGENIERIA DE PETROLEO Y GAS NATURAL',
    'INGENIERIA QUIMICA',
    'INGENIERIA TEXTIL',
    'INGENIERIA SANITARIA',
    'INGENIERIA DE HIGIENE Y SEGURIDAD INDUSTRIAL',
    'INGENIERIA AMBIENTAL'
  ]

  constructor(public modalRef: MatDialogRef<ModalEditStudentComponent>, @Inject(MAT_DIALOG_DATA) public data: Student) {

  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.modalRef.close()
  }

}

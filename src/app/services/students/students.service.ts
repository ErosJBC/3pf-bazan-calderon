import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private API_STUDENTS_URL = 'https://us-central1-students-api-100.cloudfunctions.net/app/api/v1/students'

  private settingData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error) console.warn(`Error de backend tipo ${error.status} con el mensaje de ${error.message}`)
    return throwError(() => new Error('Error de comunicación http'))
  }

  getStudentsList(): Observable<Student[]>{
    return this.http.get<Student[]>(this.API_STUDENTS_URL).pipe(catchError(this.handleError))
  }

  getStudent(id: string): Observable<Student>{
    return this.http.get<Student>(`${this.API_STUDENTS_URL}/${id}`)
  }

  createStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.API_STUDENTS_URL, student, this.settingData)
  }

  updateStudent(student: Student, id: string): Observable<Student>{
    return this.http.put<Student>(`${this.API_STUDENTS_URL}/${id}`, student)
  }

  deleteStudent(id: string): Observable<Student>{
    return this.http.delete<Student>(`${this.API_STUDENTS_URL}/${id}`)
  }
}

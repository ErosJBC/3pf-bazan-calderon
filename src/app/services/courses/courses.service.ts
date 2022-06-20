import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private API_COURSES_URL = 'https://us-central1-students-api-100.cloudfunctions.net/app/api/v1/courses'

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

  getCoursesList(): Observable<Course[]>{
    return this.http.get<Course[]>(this.API_COURSES_URL).pipe(catchError(this.handleError))
  }

  getCourse(id: string): Observable<Course>{
    return this.http.get<Course>(`${this.API_COURSES_URL}/${id}`)
  }

  createCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(this.API_COURSES_URL, course, this.settingData)
  }

  updateCourse(course: Course, id: string): Observable<Course>{
    return this.http.put<Course>(`${this.API_COURSES_URL}/${id}`, course)
  }

  deleteCourse(id: string): Observable<Course>{
    return this.http.delete<Course>(`${this.API_COURSES_URL}/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { StudentForm } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private http = inject(HttpClient);
  private api = 'http://localhost:3000/students';

  // use Observable 
  public data$ = new Observable(observable => {
    observable.next(10);
    observable.complete();
  });

  // observable
  public studentData$ = this.getStudent();

  getStudent(): Observable<StudentForm[]> {
    return this.http.get<StudentForm[]>(this.api);
  }

  getStudentById(studentId: any): Observable<StudentForm> {
    return this.http.get<StudentForm>((`${this.api}/${studentId}`));
    //  return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: StudentForm): Observable<StudentForm[]> {
    return this.http.post<StudentForm[]>(this.api, student);
  }

  updateStudent(student: StudentForm): Observable<StudentForm> {
    return this.http.put<StudentForm>(`${this.api}/${student.id}`, student);
    // return this.http.put<Student>(`${this.apiUrl}/${student.id}`,student);
  }

  deleteStudent(studentId: any): Observable<void> {
    return this.http.delete<void>(`${this.api}/${studentId}`);
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }


}

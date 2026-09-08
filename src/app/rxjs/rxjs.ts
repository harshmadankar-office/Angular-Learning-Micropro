import { Component, inject } from '@angular/core';
import { Student } from '../../services/student';
import { StudentForm } from '../../models/student';
import { Employee } from '../../services/employee';
import { catchError, debounceTime, of, Subscription, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rxjs',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
})
export class RXJS {
  private studentService = inject(Student);
  private employeeService = inject(Employee)
  students: StudentForm[] = [];
  filteredStudentData: StudentForm[] = [];
  searchControl = new FormControl('');

  private dataSubscription!: Subscription;
  message: string = 'No Message';

  ngOnInit() {
    this.getAllStudents();
    this.getDataFromSubject();

    this.searchControl.valueChanges.pipe(
      debounceTime(100),
      switchMap((searchText) => {
        const search = searchText?.trim().toLowerCase() || "";
        if (!search) {
          return of(this.students);
        }
        const result = this.students.filter((x) => x?.name.toLowerCase().includes(search));
        return of(result);
      }),
      catchError(error => {
        console.error('Search error:', error);
        return of([]);
      })
    ).subscribe((result) => {
      this.filteredStudentData = result;
    })
  }

  getAllStudents() {
    this.studentService.studentData$.subscribe({
      next: (data) => {
        this.students = data;
        console.log(this.students);
      },
      error: () => {
        console.log("ERROR");
      }
    })
  }

  // behaviour Subject
  getDataFromSubject() {
    this.dataSubscription = this.employeeService.getSubjectData$.subscribe({
      next: (message) => {
        this.message = message;
      }
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}

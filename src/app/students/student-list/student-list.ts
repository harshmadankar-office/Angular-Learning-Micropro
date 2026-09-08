import { Component, inject, signal } from '@angular/core';
import { Student } from '../../../services/student';
import { Router } from '@angular/router';
import { StudentForm } from '../../../models/student';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {

  private studentService = inject(Student);
  private router = inject(Router);

  students = signal<StudentForm[]>([]);
  isLoading = signal(false);
  errorMessage = signal('');

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getStudent().subscribe({
      next: (data) => {
        this.students.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  addStudent() {
    this.router.navigate(['students/add']);
  }

  studentData: any;
  editStudent(studentId: string) {
    // this.studentService.getStudentById(studentId as any).subscribe({
    //   next: (data) => {
    //     this.studentData = data;
        this.router.navigate(['/students/edit', studentId]);
    //   }
    // });
  }

  viewStudent(id: string) {
    this.router.navigate(['/students', id]);
  }

  deleteStudent(studentId: string) {
    this.studentService.deleteStudent(studentId as any).subscribe({
      next: () => {
        this.getAllStudents();
      },
      error: () => {
        console.log("ERROR");
      }
    })
  }

}

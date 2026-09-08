import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { StudentForm } from '../../../models/student';
import { Student } from '../../../services/student';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  imports: [JsonPipe],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.scss',
})
export class StudentDetail {

  private route = inject(ActivatedRoute);
  private studentService = inject(Student);
  private changeDetector = inject(ChangeDetectorRef);
  studentDetail = signal<StudentForm>;
  // public data$: Observable<StudentForm> | undefined;
  // student = signal<StudentForm | undefined>(undefined);
  student?: StudentForm;

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const id = (this.route.snapshot.paramMap.get('id'));
    // this.data$ = this.studentService.getStudentById(id);
    // this.formData = this.data$;
    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.student = data;
        this.changeDetector.markForCheck();
      },
      error: (error) => console.error(error),
    });
  }

  // we also use Observable
  // getDetail() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.data$ = this.studentService.getStudentById(id);
  //   this.student = this.data$;
  // }
}

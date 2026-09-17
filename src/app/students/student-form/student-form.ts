import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../../services/student';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlyNumber } from '../../../shared/directives/only-number';
import { HmButton } from '../../../shared/components/hm-button/hm-button';
import { HmCard } from '../../../shared/components/hm-card/hm-card';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, OnlyNumber, HmButton, HmCard],
  standalone : true,
  templateUrl: './student-form.html',
  styleUrl: './student-form.scss',
})
export class StudentForm {

  private fb = inject(FormBuilder);
  private studentService = inject(Student);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  studentId?: string;

  studentForm = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [null as number | null, [Validators.required,  Validators.maxLength(2)]],
    course: ['', Validators.required]
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.studentId = id;
      this.loadStudent(this.studentId);
    }
  }

  loadStudent(studentId: string) {
    this.studentService.getStudentById(studentId).subscribe({
      next: (student) => {
        this.studentForm.patchValue(student);
      }
    });
  }

  saveStudent() {
    // let formData = this.studentForm.value;
    let formData = this.studentForm.getRawValue();
    console.log(formData);

    if (this.studentForm.invalid) {
      alert("Invalid Form");
      this.studentForm.markAllAsTouched();
    }

    if (this.studentId) {
      this.studentService.updateStudent(formData as any).subscribe(() => {
        this.router.navigate(['/dashboard/student-list']);
      })
    } else {
      this.studentService.addStudent(formData as any).subscribe(() => {
      this.router.navigate(['/dashboard/student-list']);
      })
    }
  }
}

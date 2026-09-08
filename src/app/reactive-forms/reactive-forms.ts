import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../services/employee';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {

  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private empService = inject(Employee);
  apiData: any;
  isLoading: boolean = false;
  errorMessage = "";

  empForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit() {
    console.log(this.route.snapshot.data);
  }

  callDemoApi() {
    this.isLoading = true;
    this.errorMessage = '';
    this.empService.getEmpData().subscribe({
      next: (data) => {
        this.apiData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load employees';
        console.log(err);
        this.isLoading = false;
      }
    })
  }
}

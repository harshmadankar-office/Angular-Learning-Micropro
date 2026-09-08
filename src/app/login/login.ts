import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(Auth);
  private router = inject(Router);

  errorMessage : string = "";
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const username = this.loginForm.value.username!;
    const password = this.loginForm.value.password!;
    const isLogin = this.authService.login(username, password);

    if (isLogin) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = "INVALID CREDENTIAL !!!";
      this.loginForm.get('username')?.reset();
      this.loginForm.get('password')?.reset();
    }
  }
}

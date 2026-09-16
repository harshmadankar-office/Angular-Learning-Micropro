import { Component, inject } from '@angular/core';
import { Router } from 'express';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private authService = inject(Auth);

  logout() {
    this.authService.logout();
  }
}

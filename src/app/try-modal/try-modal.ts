import { Component } from '@angular/core';

@Component({
  selector: 'app-try-modal',
  imports: [],
  templateUrl: './try-modal.html',
  styleUrl: './try-modal.scss',
})
export class TryModal {
  openModal() {
    console.log("Open Modal");
  }
}

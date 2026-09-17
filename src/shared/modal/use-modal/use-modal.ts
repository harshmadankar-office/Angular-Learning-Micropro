import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-use-modal',
  imports: [],
  templateUrl: './use-modal.html',
  styleUrl: './use-modal.scss',
})
export class UseModal {
  @Input() title = "";
  isOpen : boolean = false;

  closeModal(){

  }

  saveDetails(){

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hm-button',
  imports: [],
  templateUrl: './hm-button.html',
  styleUrl: './hm-button.scss',
})
export class HmButton {
  @Input() label = '';
  @Input() class = 'btn btn-primary';
  @Input() disabled = false;
  @Input() type : 'button' | 'submit' = "button";

}

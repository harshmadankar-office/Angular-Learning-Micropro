import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../../../models/model';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isReset:boolean =  false;

  user: UserData = {
    id: 0,
    name: '',
    email: '',
    password: '',
    mobile: ""
  };

  onSubmit(formData: any) {
    if (!this.user) return;
    console.log(this.user);
    this.reset();
  }

  reset() {
    this.isReset = !this.isReset;
    this.user.name = '',
    this.user.email = '',
    this.user.password = '',
    this.user.mobile = ""
  }

}

import { Component, inject, input } from '@angular/core';
import { Employee } from '../../../../services/employee';
import { EmployeeForm } from '../../../../models/model';
import { SIGNAL } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  private employeeService = inject(Employee);
  dashboard :string = "";
  // example - Signals Input
  employee = input<any>();

  ngOnInit(){
    this.dashboard = "Welcome to the Dashboard";
    console.log("ngOnInit");
  }

  sendMessage(){
    this.employeeService.sendMessage("Hello From Dashboard");
    console.log("Message Sent");
  }

}

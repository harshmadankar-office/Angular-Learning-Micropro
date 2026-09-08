import { Component, inject } from '@angular/core';
import { Employee } from '../../../../services/employee';
import { EmployeeForm, UserData } from '../../../../models/model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private Empservices = inject(Employee);
  employeeList: EmployeeForm[] = [];
  isReset: boolean = false;
  isEditMode = false;
  user: any = { id: '', name: '', email: '', password: '', mobile: "" };

  ngOnInit() {
    this.employeeList = this.Empservices.getEmployees();
  }

  addEmployee() {
    if (!this.user) return;
    this.Empservices.addEmployee(this.user);
    this.employeeList = this.Empservices.getEmployees();
    this.reset();
  }

  updateEmployee(employee: EmployeeForm) {
    this.user = { ...employee };
    this.isEditMode = true;
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) return;
    const submittedUser = { ...this.user };

    if (this.isEditMode) {
      this.Empservices.updateEmployee(submittedUser);
      console.log('Emp update', submittedUser);
    } else {
      this.Empservices.addEmployee(submittedUser);
      this.employeeList = this.Empservices.getEmployees();
      console.log('Emp added', submittedUser);
    }
    console.log(submittedUser);
    this.reset();
  }

  deleteEmployee(employeeId: string) {
    this.Empservices.deleteEmployee(employeeId);
    this.employeeList = this.Empservices.getEmployees();
  }

  reset(){
    this.user = { id: '', name: '', email: '', password: '', mobile: '' };
    // this.isEditMode = false;
  }

}

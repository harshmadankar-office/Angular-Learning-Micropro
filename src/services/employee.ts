import { inject, Injectable } from '@angular/core';
import { EmployeeForm } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  private http = inject(HttpClient);
  private employees: EmployeeForm[] = [];

  // use subject
  // private subjectData = new BehaviorSubject<string>("");
  private subjectData = new BehaviorSubject<string>("");
  getSubjectData$ = this.subjectData.asObservable();

  sendMessage(message:string){
    this.subjectData.next(message);
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: EmployeeForm) {
    this.employees.push(employee);
  }

  deleteEmployee(employeeId: string) {
    this.employees = this.employees.filter(emp => emp?.id !== employeeId);
  }

  updateEmployee(updatedEmployee: EmployeeForm) {
    const index = this.employees.findIndex(emp => emp?.id === updatedEmployee?.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  // call api's
  getEmpData(){
    const api = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(api);
  }

}

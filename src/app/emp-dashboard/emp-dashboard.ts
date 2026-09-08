import { Component } from '@angular/core';
import { Employee } from '../../models/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-dashboard',
  imports: [FormsModule],
  templateUrl: './emp-dashboard.html',
  styleUrl: './emp-dashboard.scss',
})


export class EmpDashboard {

  searchText: string = "";
  selectedStatus = 'All';

  employees: Employee[] = [
    {
      id: 1,
      name: 'Harsh Madankar',
      department: 'IT',
      status: 'Active',
      joiningDate: new Date('2025-01-10'),
      salary: 17000
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      department: 'HR',
      status: 'Inactive',
      joiningDate: new Date('2024-08-15'),
      salary: 12500
    },
    {
      id: 3,
      name: 'Amit Patel',
      department: 'Sales',
      status: 'Active',
      joiningDate: new Date('2025-03-20'),
      salary: 20000
    },
    {
      id: 4,
      name: 'Priya Shah',
      department: 'IT',
      status: 'Active',
      joiningDate: new Date('2025-05-12'),
      salary: 19000
    }
  ];

  get filteredEmployees(): Employee[] {
    const search = this.searchText.toLowerCase().trim();
    return this.employees.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(search) || employee.department.toLowerCase().includes(search);
      const matchesStatus = this.selectedStatus === 'All' || employee.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  // template reference variable
  show(value:string){
    console.log(value);
  }
}

import { Component, inject } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { RouterOutlet } from "@angular/router";
import { Employee } from '../../../services/employee';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Footer, Header, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  // private employeeService = inject(Employee);
  dashboard: string = "";

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("Component Destroyed");
  }
}

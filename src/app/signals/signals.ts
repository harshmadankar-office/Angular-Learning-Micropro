import { Component, computed, effect, input, signal } from '@angular/core';
import { Employee, EmployeeForm } from '../../models/model';
import { json } from 'stream/consumers';
import { JsonPipe } from '@angular/common';
import { Content } from "../dashboard/dashboard/content/content";

@Component({
  selector: 'app-signals',
  imports: [Content],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  count = signal(0);
  name = signal("Harsh");
  effectCountValue: number = 0;
  employee = input<any>(); // use signal Input

  empData = {
    id: 1,
    name: "Harsh",
    mobile: 9898787980,
    email: "harsh@micropro.com",
    password: "Admin"
  };

  constructor() {
    effect(() => {
      this.effectCountValue = this.count();
      console.log(this.count());
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

  changeName() {
    this.name.set("Arun")
  }

  // use computed() signals

  price = signal(100);
  quantity = signal(2);

  total = computed(() => {
    return this.price() * this.quantity();
  });

  increQuantity() {
    this.quantity.update(value => value + 1);
  }

  decreQuantity() {
    this.quantity.update(value => value - 1);
  }

  // use effect()

}

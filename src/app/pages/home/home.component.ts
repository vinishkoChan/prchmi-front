import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isCollapsed = false;

  payments = [
    { student: 1, date: '2020-04-12', program: 2, cost: '300$' },
    { student: 2, date: '2020-01-01', program: 1, cost: '250$' },
    { student: 3, date: '2020-10-11', program: 6, cost: '30$' },
  ];

  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder, NzTableSortFn } from 'ng-zorro-antd/table';

interface Column {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
}

interface Program {
  student: string;
  name: string;
  language: string;
  created_at: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  columns: Column[] = [
    {
      name: 'Student',
      sortFn: (a, b) => a.student.localeCompare(b.student),
      sortOrder: null,
    },
    {
      name: 'Title',
      sortFn: (a, b) => a.student.localeCompare(b.student),
      sortOrder: null,
    },
    {
      name: 'Language',
      sortFn: (a, b) => a.name.localeCompare(b.name),
      sortOrder: null,
    },
    {
      name: 'Started',
      sortFn: (a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        const res = aDate.getTime() - bDate.getTime();
        return res;
      },
      sortOrder: null,
    },
  ];

  programs: Program[] = [
    {
      student: 'Vitaly',
      name: 'First',
      language: 'English',
      created_at: '02-20-2015',
    },
    {
      student: 'Brutaly',
      name: 'Second',
      language: 'English',
      created_at: '10-02-2010',
    },
    {
      student: 'Fataly',
      name: 'Third',
      language: 'English',
      created_at: '05-20-2018',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

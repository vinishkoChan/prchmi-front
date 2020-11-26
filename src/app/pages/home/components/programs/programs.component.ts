import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableSortOrder, NzTableSortFn } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { IProgram } from 'src/app/shared/interfaces/program.interface';
import { ProgramService } from 'src/app/shared/services/program.service';

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
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {
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

  // programs: Program[] = [
  //   {
  //     student: 'Vitaly',
  //     name: 'First',
  //     language: 'English',
  //     created_at: '02-20-2015',
  //   },
  //   {
  //     student: 'Brutaly',
  //     name: 'Second',
  //     language: 'English',
  //     created_at: '10-02-2010',
  //   },
  //   {
  //     student: 'Fataly',
  //     name: 'Third',
  //     language: 'English',
  //     created_at: '05-20-2018',
  //   },
  // ];
  programs: Observable<IProgram[]>;

  isTeacher = true;
  isMobile = false;

  constructor(private router: Router, private modal: NzModalService, private programsService: ProgramService) {}

  showConfirm(name: string): void {
    this.modal.confirm({
      nzContent: '<i>Do you Want to delete this program</i>',
      nzOnOk: () => this.programsService.deleteProgram(name),
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
    });
  }

  ngOnInit(): void {
    this.isTeacher = localStorage.getItem('role') === 'teacher';
    this.columns[0].name = this.isTeacher ? 'Student' : 'Teacher';

    this.isMobile = localStorage.getItem('view') === 'mobile';

    this.programs = this.programsService.$programs;
  }
}

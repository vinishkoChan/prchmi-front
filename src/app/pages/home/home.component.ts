import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder, NzTableSortFn } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgramService } from 'src/app/shared/services/program.service';
interface Column {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  payments: Observable<any[]>;
  columns: Column[] = [
    {
      name: 'Student',
      sortFn: (a, b) => a.student.localeCompare(b.student),
      sortOrder: null,
    },
    {
      name: 'Date',
      sortFn: (a, b) => a.student.localeCompare(b.student),
      sortOrder: null,
    },
    {
      name: 'Program',
      sortFn: (a, b) => a.name.localeCompare(b.name),
      sortOrder: null,
    },
    {
      name: 'Cost',
      sortFn: (a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        const res = aDate.getTime() - bDate.getTime();
        return res;
      },
      sortOrder: null,
    },
  ];

  constructor(private programsService: ProgramService) {}

  ngOnInit(): void {
    const name = localStorage.getItem('role');
    this.payments = this.programsService.payments$.pipe(
      map((payments) => {
        return name === 'teacher' ? payments : payments.filter((element) => element.student === name);
      }),
    );
  }
}

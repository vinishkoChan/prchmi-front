import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProgram } from '../interfaces/program.interface';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private programs: IProgram[] = [
    {
      teacherId: 'Teacher',
      student: 'student',
      language: 'English',
      name: 'Program1',
      created_at: new Date().toLocaleDateString(),
    },
  ];
  public programs$ = new BehaviorSubject(this.programs);

  private payments = [];
  public payments$ = new BehaviorSubject(this.payments);

  constructor(private http: HttpClient) {}

  addProgram(data: IProgram): void {
    this.programs.push(data);
  }

  editProgram(pt: string, data: IProgram): void {
    const el = this.programs.find((el) => el.name === pt);
    Object.assign(el, data);
  }

  deleteProgram(pt: string): void {
    const ind = this.programs.indexOf(this.programs.find((el) => el.name === pt));
    this.programs.splice(ind, 1);
  }

  addPayment(payment) {
    this.payments.push(payment);
    this.payments$.next(this.payments);
  }
}

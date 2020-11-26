import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { IProgram } from '../interfaces/program.interface';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private programs: IProgram[] = [{ teacherId: 1, student: 'Asd', language: 'English', name: 'Program1' }];
  public $programs = new BehaviorSubject<IProgram[]>(this.programs);

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
    console.log(ind);
    this.programs.splice(ind, 1);
  }
}

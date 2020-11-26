import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksToDo: ITask[] = [{ name: 'Task1', description: 'description' }];
  public $tasksToDo = new BehaviorSubject<ITask[]>(this.tasksToDo);
  private tasksInPr: ITask[] = [{ name: 'Task1', description: 'description' }];
  public $tasksInPr = new BehaviorSubject<ITask[]>(this.tasksInPr);
  private tasksDone: ITask[] = [{ name: 'Task1', description: 'description' }];
  public $tasksDone = new BehaviorSubject<ITask[]>(this.tasksDone);

  constructor(private http: HttpClient) {}

  addTask(type: string, data: ITask): void {
    console.log(type, data);
    switch (type) {
      case 'todo':
        this.tasksToDo.push(data);
        break;
      case 'inpr':
        this.tasksInPr.push(data);
        break;
      case 'done':
        this.tasksDone.push(data);
        break;
    }
  }

  editTask(type: string, pt: string, data: ITask): void {
    console.log(type, pt, data);
    switch (type) {
      case 'todo':
        const el1 = this.tasksToDo.find((el) => el.name === pt);
        Object.assign(el1, data);
        console.log(el1);
        break;
      case 'inpr':
        const el2 = this.tasksInPr.find((el) => el.name === pt);
        Object.assign(el2, data);
        break;
      case 'done':
        const el3 = this.tasksDone.find((el) => el.name === pt);
        Object.assign(el3, data);
        break;
    }
  }

  deleteTask(type: string, pt: string): void {
    switch (type) {
      case 'todo':
        const ind1 = this.tasksToDo.indexOf(this.tasksToDo.find((el) => el.name === pt));
        this.tasksToDo.splice(ind1, 1);
        break;
      case 'inpr':
        const ind2 = this.tasksInPr.indexOf(this.tasksInPr.find((el) => el.name === pt));
        this.tasksInPr.splice(ind2, 1);
        break;
      case 'done':
        const ind3 = this.tasksDone.indexOf(this.tasksDone.find((el) => el.name === pt));
        this.tasksDone.splice(ind3, 1);
        break;
    }
  }
}

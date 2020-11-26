import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  todo: Observable<ITask[]>;
  inProgress: Observable<ITask[]>;
  done: Observable<ITask[]>;
  isMobile = false;
  isTeacher = false;

  constructor(private modal: NzModalService, private taskService: TaskService) {}

  ngOnInit(): void {
    this.isTeacher = localStorage.getItem('role') === 'teacher';

    this.isMobile = localStorage.getItem('view') === 'mobile';

    this.todo = this.taskService.$tasksToDo;
    this.inProgress = this.taskService.$tasksInPr;
    this.done = this.taskService.$tasksDone;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  showConfirm(type: string, name: string): void {
    this.modal.confirm({
      nzContent: '<i>Do you Want to delete this program</i>',
      nzOnOk: () => this.taskService.deleteTask(type, name),
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
    });
  }
}

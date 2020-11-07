import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = [
    'asdasd',
    'qweqweqweqwe',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
    'cxzczxczcz',
    'wqe13123123',
  ];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}

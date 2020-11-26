import { Component } from '@angular/core';

@Component({
  selector: 'app-info-task-modal',
  templateUrl: './info-task-modal.component.html',
  styleUrls: ['./info-task-modal.component.css'],
})
export class InfoTaskModalComponent {
  isVisible = false;
  isOkLoading = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}

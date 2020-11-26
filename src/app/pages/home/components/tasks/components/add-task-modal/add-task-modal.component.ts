import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Observer } from 'rxjs';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css'],
})
export class AddTaskModalComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  geniralInfoGroup: FormGroup;
  @Input() isEdit = false;
  @Input() pt = ' ';
  @Input() type = '';
  title = 'New Task';

  validateForm: FormGroup;

  ngOnInit() {
    this.title = this.isEdit ? 'Edit Task' : this.title;
  }

  submitForm(value: { name: string; description: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.type);
    if (this.isEdit) {
      this.taskService.editTask(this.type, this.pt, value);
    } else this.taskService.addTask(this.type, value);
  }

  resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 0);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder, private modal: NzModalService, private taskService: TaskService) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      description: ['', [Validators.required]],
    });
  }

  showModal(type?, data?): void {
    this.isVisible = true;
    if (this.isEdit) {
      this.validateForm.controls['name'].setValue(data.name);
      this.validateForm.controls['description'].setValue(data.description);
      this.pt = data.name;
      this.type = type;
    }
  }

  handleOk(value: { name: string; description: string }): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.submitForm(value);
      this.isOkLoading = false;
    }, 0);
  }

  handleCancel(): void {
    this.resetForm();
    this.isVisible = false;
  }

  handleDelete(): void {
    this.modal.confirm({
      nzContent: '<i>Do you Want to delete this program</i>',
      nzOnOk: () => console.log('OK'),
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
    });
  }
}

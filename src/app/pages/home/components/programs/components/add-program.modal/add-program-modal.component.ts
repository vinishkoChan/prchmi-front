import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { IProgram } from 'src/app/shared/interfaces/program.interface';
import { ProgramService } from 'src/app/shared/services/program.service';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.css'],
})
export class AddProgramModalComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  geniralInfoGroup: FormGroup;
  localstorage = localStorage;
  @Input() isEdit = false;
  title = 'New Program';
  pt: string;
  isTeacher: boolean;

  validateForm: FormGroup;

  submitForm(value: { lang: string; progTitle: string; stud: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const data: IProgram = {
      name: value.progTitle,
      language: value.lang,
      student: value.stud,
      teacherId: 'Teacher',
      created_at: new Date().toLocaleDateString(),
    };
    if (this.isEdit) {
      this.programService.editProgram(this.pt, data);
    } else this.programService.addProgram(data);
  }

  resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
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
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder, private programService: ProgramService) {
    this.validateForm = this.fb.group({
      progTitle: ['', [Validators.required], [this.userNameAsyncValidator]],
      lang: ['', [Validators.required]],
      stud: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.title = this.isEdit ? 'Edit Program' : this.title;
    this.isTeacher = localStorage.getItem('role') === 'teacher';
  }

  showModal(data?: IProgram): void {
    this.isVisible = true;
    if (this.isEdit) {
      this.validateForm.controls['lang'].setValue(data.language);
      this.validateForm.controls['progTitle'].setValue(data.name);
      this.validateForm.controls['stud'].setValue(data.student);
      this.pt = data.name;
    }
  }

  handleOk(value: { lang: string; progTitle: string; stud: string }): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.submitForm(value);
      this.isOkLoading = false;
    }, 1500);
  }

  handleCancel(): void {
    this.resetForm();
    this.isVisible = false;
  }
}

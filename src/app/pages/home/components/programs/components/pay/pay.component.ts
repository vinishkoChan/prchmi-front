import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { IProgram } from 'src/app/shared/interfaces/program.interface';
import { ProgramService } from 'src/app/shared/services/program.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  geniralInfoGroup: FormGroup;
  localstorage = localStorage;
  title = 'New Payment';
  pt: string;
  prog: IProgram;

  validateForm: FormGroup;

  submitForm(value: { lang: string; progTitle: string; stud: string }): void {
    this.validateForm.markAsDirty();
    this.validateForm.updateValueAndValidity();
    const data = {
      program: this.pt,
      student: localStorage.getItem('role'),
      payment: value.lang,
      date: new Date().toLocaleDateString(),
    };
    this.programService.addPayment(data);
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
    });
  }
  ngOnInit(): void {}

  showModal(data?: IProgram): void {
    this.prog = data;
    this.isVisible = true;
    this.validateForm.controls['progTitle'].setValue(data.name);
    this.validateForm.controls['progTitle'].disable();
    this.pt = data.name;
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

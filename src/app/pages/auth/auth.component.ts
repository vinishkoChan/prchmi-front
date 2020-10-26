import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  email: string;
  password: string;
  confirmPassword: string;
  signUpForm: FormGroup;

  isSignIn = true;
  title = 'Sign In';

  constructor(private router: Router) {
    this._createForm();
  }

  private _createForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  submit(form: NgForm): void {
    console.log(form);
  }

  setSignIn() {
    this.isSignIn = true;
    this.title = 'Sign In';
  }

  setSignIUp() {
    this.isSignIn = false;
    this.title = 'Sign Up';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { login } from 'src/app/store/actions/auth.actions';
import { State } from 'src/app/store/reducers/auth.reducer';

interface IAuthData {
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  users$: Observable<any>;

  isSignIn = true;
  title = 'Sign In';

  constructor(private router: Router, private store: Store<State>) {
    this._createForm();
  }
  ngOnInit(): void {
    this.users$ = this.store.select('users');
  }

  private _createForm() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  onSubmit(form: IAuthData): void {
    localStorage.setItem('role', `${form.email}`);
    this.router.navigateByUrl('/home');
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

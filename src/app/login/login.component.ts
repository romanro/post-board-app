import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services';
import { Subscription } from 'rxjs';

import { AuthService, ILoginData } from './_infra';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  loginSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const loginData: ILoginData = { username: this.f.username.value, password: this.f.password.value }
    this.loginSub = this.authService.login(loginData).subscribe(
      res => {
        if (res.success) {
          // succesfull login
          localStorage.setItem('authToken', res.token);

        } else {
          this.alertService.error(res.message);
          this.submitted = false;
          this.loading = false;
        }
      },
      error => {
        this.alertService.error('HTTP Error!');
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }


}

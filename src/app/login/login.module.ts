import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, LoginRoutingModule, HttpClientModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

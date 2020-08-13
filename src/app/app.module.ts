import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Page404Component } from './_infra/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

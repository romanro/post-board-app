import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Page404Component } from './_infra/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesEffects } from './board/_infra/store/effects';
import { NotesReducer } from './board/_infra/store/reducers';
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
    BoardModule,
    StoreModule.forRoot({ notes: NotesReducer }),
    EffectsModule.forRoot([NotesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

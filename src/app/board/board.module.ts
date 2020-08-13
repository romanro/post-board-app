import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule
  ],
  declarations: [BoardComponent, NoteComponent]
})
export class BoardModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { NoteAddEditComponent } from './note-add-edit/note-add-edit.component';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    NgbModalModule,
    ReactiveFormsModule
  ],
  declarations: [BoardComponent, NoteComponent, NoteModalComponent, NoteAddEditComponent]
})
export class BoardModule { }

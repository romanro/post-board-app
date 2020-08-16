import { Component, Input, OnInit } from '@angular/core';
import * as NotesActions from '@app/board/_infra/store/actions/notes.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { INote, NoteModalMode } from '../_infra/models';

@Component({
  selector: 'pb-note-modal',
  templateUrl: './note-modal.component.html'
})
export class NoteModalComponent implements OnInit {

  @Input() note: INote = null;
  @Input() mode: NoteModalMode = NoteModalMode.ADD;

  modalTitle: string;

  constructor(public activeModal: NgbActiveModal, private store: Store<any>) { }

  ngOnInit(): void {
    this.switchTemplate();
  }

  switchTemplate(): void {
    switch (this.mode) {
      case NoteModalMode.ADD:
        this.modalTitle = `Post a new note`;
        break;
      case NoteModalMode.EDIT:
        this.modalTitle = `Edit a note from ${this.note.author}`;
        break;
      case NoteModalMode.SHOW:
        this.modalTitle = `A note from ${this.note.author}`;
        break;
    }
  }

  editNote(): void {
    this.mode = NoteModalMode.EDIT;
    this.switchTemplate();
  }

  deleteNote(): void {
    this.store.dispatch(NotesActions.BeginDeleteNoteAction({ payload: this.note.id }));
    this.activeModal.close();
  }

  onNoteSended(): void {
    this.activeModal.close();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as NotesActions from '@app/board/_infra/store/actions/notes.actions';
import { Store } from '@ngrx/store';

import { INote, NoteModalMode } from '../_infra/models';

@Component({
  selector: 'pb-note-add-edit',
  templateUrl: './note-add-edit.component.html'
})
export class NoteAddEditComponent implements OnInit {

  @Input() note: INote;
  @Input() mode: NoteModalMode = NoteModalMode.EDIT;

  @Output() sended = new EventEmitter<null>();

  noteForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      author: [(this.note ? this.note.author : ''), Validators.required],
      content: [(this.note ? this.note.content : ''), [Validators.required, Validators.maxLength(200)]]
    });
  }

  get f(): any { return this.noteForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.noteForm.invalid) {
      return;
    }

    const payload: INote = {
      id: null,
      author: this.f.author.value,
      content: this.f.content.value,
      date: null
    };

    switch (this.mode) {
      case NoteModalMode.EDIT:
        payload.id = this.note.id;
        payload.date = this.note.date;
        this.store.dispatch(NotesActions.BeginUpdateNoteAction({ payload }));
        break;

      case NoteModalMode.ADD:
        this.store.dispatch(NotesActions.BeginAddNoteAction({ payload }));
        break;
    }


    this.sended.emit();
  }

  onCancel(): void {
    this.sended.emit();
  }

}

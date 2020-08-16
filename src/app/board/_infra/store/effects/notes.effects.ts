import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { INote } from '../../models';
import * as NotesActions from '../actions/notes.actions';
import { NotesService } from './../../services/notes.service';

@Injectable()
export class NotesEffects {

  constructor(private action$: Actions, private notesService: NotesService) { }

  getNotes$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(NotesActions.BeginGetNotesAction),
      mergeMap(action =>
        this.notesService.getNotes().pipe(
          map((data: Array<INote>) => {
            return NotesActions.SuccessGetNotesAction({ payload: data });
          })
        )
      )
    )
  );

  updateNote$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(NotesActions.BeginUpdateNoteAction),
      mergeMap(action =>
        this.notesService.updateNote(action.payload).pipe(
          map((data: INote) => {
            return NotesActions.SuccessUpdateNoteAction({ payload: data });
          })
        )
      )
    )
  );

  addNote$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(NotesActions.BeginAddNoteAction),
      mergeMap(action =>
        this.notesService.addNote(action.payload).pipe(
          map((data: INote) => {
            return NotesActions.SuccessAddNoteAction({ payload: data });
          })
        )
      )
    )
  );

  deleteNote$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(NotesActions.BeginDeleteNoteAction),
      mergeMap(action =>
        this.notesService.deleteNote(action.payload).pipe(
          map((noteId: string) => {
            return NotesActions.SuccessDeleteNoteAction({ payload: noteId });
          })
        )
      )
    )
  );

}

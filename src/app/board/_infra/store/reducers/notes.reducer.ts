import { Action, createReducer, on } from '@ngrx/store';

import * as NotesActions from '../actions/notes.actions';
import { initializeNotesState, NotesState } from '../state';

export const initialNotesState = initializeNotesState();

const reducer = createReducer(
  initialNotesState,

  on(NotesActions.SuccessGetNotesAction, (state: NotesState, { payload }) => {
    return { ...state, notes: payload };
  }),

  on(NotesActions.SuccessAddNoteAction, (state: NotesState, { payload }) => {
    const notes = [...state.notes];
    notes.push(payload);
    console.log(notes);
    return { ...state, notes };
  }),

  on(NotesActions.SuccessUpdateNoteAction, (state: NotesState, { payload }) => {
    const notes = state.notes.map(note => note.id === payload.id ? payload : note);
    return { ...state, notes };
  }),

);


export function NotesReducer(state: NotesState | undefined, action: Action): any {
  return reducer(state, action);
}

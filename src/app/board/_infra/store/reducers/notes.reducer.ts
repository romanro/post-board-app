import { Action, createReducer, on } from '@ngrx/store';

import * as NotesActions from '../actions/notes.actions';
import { initializeNotesState, NotesState } from '../state';

export const initialNotesState = initializeNotesState();

const reducer = createReducer(
  initialNotesState,
  on(NotesActions.GetNotesAction, state => state),

  on(NotesActions.SuccessGetNotesAction, (state: NotesState, { payload }) => {
    return { ...state, notes: payload };
  }),

);


export function NotesReducer(state: NotesState | undefined, action: Action): any {
  return reducer(state, action);
}

import { createSelector } from '@ngrx/store';

import { NotesState } from '../state';


export const selectNotes = (state: NotesState) => state.notes;

export const selectAllNotes = () => createSelector(
  selectNotes, (state) => {
    if (state['notes']) {
      return state['notes'];
    } else {
      return null;
    }
  }
)

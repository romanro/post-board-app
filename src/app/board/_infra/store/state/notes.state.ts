import { INote } from './../../models';

export class NotesState {
  notes: Array<INote> | null;
}

export const initializeNotesState = () => {
  return { notes: null };
};

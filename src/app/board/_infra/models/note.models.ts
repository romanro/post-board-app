export interface INote {
  id: string;
  author: string;
  content: string;
  date: Date;
}

export enum NoteModalMode {
  EDIT = 'edit',
  SHOW = 'show',
  ADD = 'add'
}

export const NOTES_KEY = 'notes';

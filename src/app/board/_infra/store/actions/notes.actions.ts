import { createAction, props } from '@ngrx/store';

import { INote } from './../../models/';

export enum NotesActionType {
  BeginGetNotesAction = '[notes] - Begin Get notes',
  SuccessGetNotesAction = '[notes] - Success Get notes',
  BeginAddNoteAction = '[notes] - Begin Add note',
  SuccessAddNoteAction = '[notes] - Success Add note',
  BeginUpdateNoteAction = '[notes] - Begin Update note',
  SuccessUpdateNoteAction = '[notes] - Success Update note',
  BeginDeleteNoteAction = '[notes] - Begin Delete note',
  SuccessDeleteNoteAction = '[notes] - Success Delete note'
}


export const BeginGetNotesAction = createAction(NotesActionType.BeginGetNotesAction);

export const SuccessGetNotesAction = createAction(
  NotesActionType.SuccessGetNotesAction,
  props<{ payload: Array<INote> }>()
);

export const BeginAddNoteAction = createAction(
  NotesActionType.BeginAddNoteAction,
  props<{ payload: INote }>()
);

export const SuccessAddNoteAction = createAction(
  NotesActionType.SuccessAddNoteAction,
  props<{ payload: INote }>()
);

export const BeginUpdateNoteAction = createAction(
  NotesActionType.BeginUpdateNoteAction,
  props<{ payload: INote }>()
);

export const SuccessUpdateNoteAction = createAction(
  NotesActionType.SuccessUpdateNoteAction,
  props<{ payload: INote }>()
);

export const BeginDeleteNoteAction = createAction(
  NotesActionType.BeginUpdateNoteAction,
  props<{ payload: string }>()
);

export const SuccessDeleteNoteAction = createAction(
  NotesActionType.SuccessUpdateNoteAction,
  props<{ payload: string }>()
);

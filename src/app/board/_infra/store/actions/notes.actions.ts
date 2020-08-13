import { createAction, props } from '@ngrx/store';

import { INote } from './../../models/';

export enum NotesActionType {
  GetNotesAction = '[notes] - Get notes',
  BeginGetNotesAction = '[notes] - Begin Get notes',
  SuccessGetNotesAction = '[notes] - Success Get notes',
  BeginAddNoteAction = '[notes] - Begin Add note',
  SuccessAddNoteAction = '[notes] - Success Add note'
}


export const GetNotesAction = createAction(NotesActionType.GetNotesAction);

export const BeginGetNotesAction = createAction(NotesActionType.BeginGetNotesAction);

export const SuccessGetNotesAction = createAction(
  NotesActionType.SuccessGetNotesAction,
  props<{ payload: Array<INote> }>()
);

export const BeginAddNoteAction = createAction(
  NotesActionType.BeginAddNoteAction,
  props<{ payload: Array<INote> }>()
);

export const SuccessAddNoteAction = createAction(
  NotesActionType.SuccessAddNoteAction,
  props<{ payload: Array<INote> }>()
);

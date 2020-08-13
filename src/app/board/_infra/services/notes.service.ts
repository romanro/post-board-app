import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INote } from './../models/note.models';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  mockNotes: Array<INote> = [
    { author: 'Demo Autor', content: 'Lotem Ipsum lalalla', date: new Date() }
  ];

  constructor() { }

  getNotes(): Observable<INote[]> {
    return of(this.mockNotes);
  }

  addNote(note: INote): void { }


}

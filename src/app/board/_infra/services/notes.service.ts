import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INote } from './../models/note.models';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  mockNotes: Array<INote> = [
    { id: 'someUNiqueId1', author: 'Demo Autor', content: 'Lotem Ipsum lalalla', date: new Date() },
    { id: 'someUNiqueId2', author: 'Second Autor', content: 'Lotem Ipsum trololol', date: new Date() }
  ];

  constructor(private utilsService: UtilsService) { }

  getNotes(): Observable<INote[]> {
    return of(this.mockNotes);
  }

  addNote(note: INote): Observable<INote> {
    const updatedNote: INote = { ...note };
    updatedNote.id = this.utilsService.generateUID();
    updatedNote.date = new Date();
    return of(updatedNote);
  }

  updateNote(note: INote): Observable<INote> {
    this.mockNotes = this.mockNotes.map(n => n.id === note.id ? note : n);
    return of(note);
  }


}

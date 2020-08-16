import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INote, NOTES_KEY } from './../models/note.models';
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
    const notes = this.getNotesFromLS();
    return of(notes);
  }

  addNote(note: INote): Observable<INote> {
    const updatedNote: INote = { ...note };
    updatedNote.id = this.utilsService.generateUID();
    updatedNote.date = new Date();

    const notes = this.getNotesFromLS();
    notes.push(updatedNote);
    this.storeNotesInLS(notes);
    return of(updatedNote);
  }

  updateNote(note: INote): Observable<INote> {
    const notes = this.getNotesFromLS().map(n => n.id === note.id ? note : n);
    this.storeNotesInLS(notes);
    return of(note);
  }

  deleteNote(noteId: string): Observable<string> {
    const notes = this.getNotesFromLS().filter(note => note.id !== noteId);
    this.storeNotesInLS(notes);
    return of(noteId);
  }

  /// Temporary Local Storage Functions
  private getNotesFromLS(): Array<INote> {
    return JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
  }

  private storeNotesInLS(notes: Array<INote> = []): void {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }


}

import { Injectable } from '@angular/core';

import { INote, SortingCriteria } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  generateUID(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  sortNotes(notes: Array<INote>, sort: SortingCriteria): Array<INote> {
    /// should be refactored to genereic function and moved to app infra

    switch (sort) {
      case SortingCriteria.DATE:
        notes = notes.slice().sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA - dateB;
        });
        break;
    }
    return notes;

  }

}

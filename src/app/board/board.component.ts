import { Component, OnDestroy, OnInit } from '@angular/core';
import * as NotesActions from '@app/board/_infra/store/actions/notes.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { INote } from './_infra/models';
import * as selectors from './_infra/store/selectors';

@Component({
  selector: 'pb-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit, OnDestroy {

  notes: Array<INote> = [];

  subs: Array<Subscription> = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.subs.push(
      this.store.select(selectors.selectAllNotes()).subscribe(
        res => {
          if (res) {
            this.notes = [...res];
          } else {
            this.store.dispatch(NotesActions.BeginGetNotesAction());
          }
        }
      )

    )
  }

  handleNewNoteClick(): void { }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }


}

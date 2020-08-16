import { Component, OnDestroy, OnInit } from '@angular/core';
import { INote, SortingCriteria } from '@app/board/_infra/models';
import { UtilsService } from '@app/board/_infra/services';
import * as NotesActions from '@app/board/_infra/store/actions/notes.actions';
import * as selectors from '@app/board/_infra/store/selectors';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pb-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit, OnDestroy {

  notes: Array<INote> = [];

  subs: Array<Subscription> = [];

  constructor(private store: Store<any>, private utilsService: UtilsService) { }

  ngOnInit(): void {

    this.subs.push(
      this.store.select(selectors.selectAllNotes()).subscribe(
        res => {
          if (res) {
            this.notes = this.utilsService.sortNotes(res, SortingCriteria.DATE);
          } else {
            this.store.dispatch(NotesActions.BeginGetNotesAction());
          }
        }
      )

    )
  }


  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }


}

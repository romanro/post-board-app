import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { INote } from '../_infra/models';

@Component({
  selector: 'pb-note',
  templateUrl: './note.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  @Input() note: INote = null;

  constructor() { }

  ngOnInit(): void {
  }

}

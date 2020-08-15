import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { INote, NoteModalMode } from '../_infra/models';
import { NoteModalComponent } from './../note-modal/note-modal.component';

@Component({
  selector: 'pb-note',
  templateUrl: './note.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  @Input() note: INote = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openNote(): void {
    const modalRef = this.modalService.open(NoteModalComponent);
    modalRef.componentInstance.note = this.note;
    modalRef.componentInstance.mode = NoteModalMode.SHOW;

  }

  addNote(): void {
    const modalRef = this.modalService.open(NoteModalComponent);
    modalRef.componentInstance.note = null;
    modalRef.componentInstance.mode = NoteModalMode.ADD;
  }

}

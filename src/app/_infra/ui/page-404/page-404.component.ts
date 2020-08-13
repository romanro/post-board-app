import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-page-404',
  templateUrl: './page-404.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

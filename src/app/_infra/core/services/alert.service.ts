import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(msg: string): void {
    window.alert(msg);
  }

}

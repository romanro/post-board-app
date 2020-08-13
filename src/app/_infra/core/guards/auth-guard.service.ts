import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private alertService: AlertService) { }

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.alertService.error('You are not autorized to view this page');
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
    // return token ? true : false;
  }

}

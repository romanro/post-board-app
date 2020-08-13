import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILoginData, ILoginResponce } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private jsonURL = 'assets/data/users.json';

  constructor(private http: HttpClient) { }

  login(loginData: ILoginData): Observable<ILoginResponce> {
    return this.http.get(this.jsonURL).pipe(
      map(
        (res: Array<ILoginData>) => {
          const user = res.find(u => u.username === loginData.username);
          return (user && user.password === loginData.password) ?
            ({ success: true, token: 'looong_very_sequre_token' }) :
            ({ success: false, message: 'wrong user name or password' });
        })
    );
  }

}

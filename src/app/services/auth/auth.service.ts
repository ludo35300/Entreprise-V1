import { Injectable } from '@angular/core';
import { User, UserImpl } from '../../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8080/api/v1/auth"

  user: User = new UserImpl()

  constructor(

    private router: Router,
    private http: HttpClient,
  ) { }

  login(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.apiUrl + '/authenticate', user)
  }

  accountLoggedSuccessfully(user: User) {
    this.user = user
    this.router.navigate(['/dashboard'])
  }

  isLogged(): boolean {
    console.log(this.user.token)
    const token = this.user.token
    return !!token
  }
}



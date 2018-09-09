import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  public userEmitter = this.user.asObservable();
  userEmitChange(user: any) {
    this.user.next(user);
  }
  _uri = 'http://localhost:3001/api/auth'
  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  signup(user: User) {
    return this.http.post(`${this._uri}/signup`, user, this._httpOptions);
  }

  login(user: User) {
    return this.http.post(`${this._uri}/login`, user, this._httpOptions).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data));
      this.userEmitChange(data);
      this.router.navigate(['/all-pokemons']);
    });
  }

  logout() {
    localStorage.clear();
    this.userEmitChange(null)
    if (this.router.url === '/catched-pokemons') {
      this.router.navigate(['/']);
    }
  }
}

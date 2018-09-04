import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _uri = 'http://localhost:3001/api/auth'
  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  signup(user: User) {
    return this.http.post(`${this._uri}/signup`, user, this._httpOptions);
  }

  login(user: User) {
    return this.http.post(`${this._uri}/login`, user, this._httpOptions);
  }
}

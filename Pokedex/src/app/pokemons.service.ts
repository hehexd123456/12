import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  _user = JSON.parse(localStorage.getItem('user'))
  _uri: string = 'http://localhost:3001/api/pokemons';
  _token: string = this._user ? this._user.token : null;
  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this._token,
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  getAllPokemons(page: number) {
    return this.http.get(`${this._uri}/all/?page=${page}&amount=16`);
  }

  getCatchedPokemons(page: number) {
    return this.http.get(`${this._uri}/catched/?page=${page}&amount=16`, this._httpOptions)
  }

  getPokemon(id: number) {
    return this.http.get(`${this._uri}/all/${id}`)
  }

  catchPokemon(id) {
    return this.http.put(`${this._uri}/catched`, JSON.stringify({ id }), this._httpOptions);
  }
}

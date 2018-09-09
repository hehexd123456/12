import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';


@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  _uri: string = 'http://localhost:3001/api/pokemons';

  constructor(
    private http: HttpClient,
  ) { }

  getOptions() {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': user ? user.token : '',
      })
    }
  }

  getAllPokemons(page: number): any {
    return this.http.get(`${this._uri}/all/?page=${page}&amount=16`, this.getOptions());
  }

  getCatchedPokemons(page: number): any {
    return this.http.get(`${this._uri}/catched/?page=${page}&amount=16`, this.getOptions())
  }

  getPokemon(id: number) {
    return this.http.get(`${this._uri}/all/${id}`, this.getOptions());
  }

  catchPokemon(id) {
    return this.http.put(`${this._uri}/catched`, JSON.stringify({ id }), this.getOptions());
  }
}

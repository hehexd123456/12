import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { UserService } from '../user.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css'],
})
export class AllPokemonsComponent implements OnInit {
  user;
  pokemons = [];
  page: number = 1;
  isFetching: boolean = false;
  isFetchedAll: boolean = false;
  errorMessage: any = null;

  constructor(
    private pokemonsService: PokemonsService,
    private userService: UserService,
  ) { this.userService.userEmitter.subscribe(data => this.user = data) }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.isFetching = true;
    this.pokemonsService
      .getAllPokemons(this.page)
      .subscribe(
        data => {
          this.pokemons = this.pokemons.concat(data);
          this.page = this.page + 1;
          this.isFetching = false;
          if (data.length < 16) this.isFetchedAll = true;  
        },
        error => {
          //do something else /shrug
          this.errorMessage = error.error;
        },
      )
  }

  handleCatch(id: number) {
    this.pokemonsService
      .catchPokemon(id)
      .subscribe(
        data => {
          const pokemon = this.pokemons.find(pok => pok.id === id);
          pokemon.date = data;
        },
        error => {
          console.log(error);
        }
      )
  }
}

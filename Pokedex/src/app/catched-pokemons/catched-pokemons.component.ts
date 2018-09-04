import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-catched-pokemons',
  templateUrl: './catched-pokemons.component.html',
  styleUrls: ['./catched-pokemons.component.css']
})
export class CatchedPokemonsComponent implements OnInit {
  pokemons = [];
  page: number = 1;
  isFetching: boolean = false;
  isFetchedAll: boolean = false;
  errorMessage: any = null;

  constructor(
    private pokemonsService: PokemonsService,
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.errorMessage = null;
    this.isFetching = true;
    this.pokemonsService
      .getCatchedPokemons(this.page)
      .subscribe(
        data => {
          console.log(data);
          this.pokemons = this.pokemons.concat(data);
          this.page = this.page + 1;
          this.isFetching = false;
          // if (data.length < 16) this.isFetchedAll = true;
        },
        error => {
          console.log(error);
          this.errorMessage = error.statusText;
          this.isFetching = false;
        },
      )
  }
}

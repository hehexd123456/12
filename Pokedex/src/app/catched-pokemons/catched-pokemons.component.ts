import { Component, OnInit, OnChanges } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-catched-pokemons',
  templateUrl: './catched-pokemons.component.html',
  styleUrls: ['./catched-pokemons.component.css'],
})
export class CatchedPokemonsComponent implements OnInit {
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
    this.errorMessage = null;
    this.isFetching = true;
    this.pokemonsService
      .getCatchedPokemons(this.page)
      .subscribe(
        data => {
          this.pokemons = this.pokemons.concat(data);
          this.page = this.page + 1;
          this.isFetching = false;
          if (data.length < 16) this.isFetchedAll = true;
        },
        error => {
          this.errorMessage = error.statusText;
          this.isFetching = false;
        },
      )
  }
}

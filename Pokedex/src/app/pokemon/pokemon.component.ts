import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  id: number;
  poke: object;
  isFetching: boolean = false;
  errorMessage: any = null;
  
  constructor(
    private route: ActivatedRoute, 
    private pokemonsService: PokemonsService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.getPokemon(params.id);
      },
        error => console.log(error)
    );
  }

  onBack() {
    this.location.back();
  }

  getPokemon(id) {
    this.errorMessage = null;
    this.isFetching = true;
    this.pokemonsService
      .getPokemon(id)
      .subscribe(
        data => {
          this.poke = data;
          this.isFetching = false;
        },
        error => {
          this.errorMessage = error.statusText;
          this.isFetching = false;
        }
      )
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../shared/services/pokemons.service';

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

  ngOnInit(): void {
    this.route.params
      .subscribe(
        params => {
          this.id = params.id;
          this.getPokemon(params.id);
      },
        error => {
          this.errorMessage = error;
        }
    );
  }

  onBack(): void {
    this.location.back();
  }

  getPokemon(id): void {
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

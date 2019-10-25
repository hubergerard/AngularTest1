import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  public getPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }
}

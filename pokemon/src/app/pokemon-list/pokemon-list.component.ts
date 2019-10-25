import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  selectedPokemon: Pokemon;
  constructor() { }
  @Input() pokemonList
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  list_pokemon: {};

  constructor(
    private pokemonService: PokemonService
  ) { }

  name_pokemon: String;
  pokemon : Pokemon;
  detailsPokemon : Pokemon;
  description_pokemon : String;

  ngOnInit() {
    this.getListPokemon()
  }
  
  getPokemon(name_pokemon : String){
    this.pokemonService.getPokemon(name_pokemon).then(pokemon => {
      this.pokemon = pokemon;
      //console.log(this.pokemon)
    })
    
  }

  getListPokemon(){
    this.pokemonService.getListPokemon().then(list_pokemon => {
      this.list_pokemon = list_pokemon.results;
      //console.log(list_pokemon)
    })
  }

  getDetailsPokemon(pokemon_name : String){
    this.pokemonService.getDetailsPokemon(pokemon_name).then(details => {
      this.detailsPokemon = details;
      //console.log(details)
    })
  }

}

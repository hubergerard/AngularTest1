import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getPokemon(name_pokemon : String){
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`).then(pokemon => pokemon.json());
  }

  async getListPokemon(){
    return await fetch(`https://pokeapi.co/api/v2/pokemon-species`).then(data => data.json());
  }

  async getDetailsPokemon(pokemon_name : String){
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`).then(detail_pokemon => detail_pokemon.json());
  }

}

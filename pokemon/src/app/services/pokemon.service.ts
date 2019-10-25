import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _httpClient : HttpClient) { }
  private _ApiUrl = "https://pokeapi.co/api/v2/pokemon/";

  getPokemon(id: number) { 
    return this._httpClient.get(this._ApiUrl+id);
  }
  getPokemons() {
    return this._httpClient.get(this._ApiUrl);
  }
}

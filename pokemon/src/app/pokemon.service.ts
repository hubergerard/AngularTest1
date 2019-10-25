import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from "./Pokemon.model";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  search="";
  pokemonApiUrl= "https://pokeapi.co/api/v2/pokemon";

  // getPokemons() {
  //   return this.http.get(this.pokemonApiUrl);
  // }
  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonApiUrl);
  }
  // getPokemon (): Observable<PokemonService[]> {
  //   return this.http.get<PokemonService[]>(this.pokemonApiUrl)
  //   }
}


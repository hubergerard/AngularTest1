import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from "./Pokemon.model";
import { PokemonDetail } from './PokemonDetail.model';
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
  getPokemon(url: string): Observable<PokemonDetail[]> {
    return this.http.get<PokemonDetail[]>(url);
  }
}


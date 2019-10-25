import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  search=""
  pokemonApiUrl= "https://pokeapi.co/api/v2/pokemon";

  getPokemons() {
    return this.http.get(this.pokemonApiUrl);
  }
  
  // getPokemon (): Observable<PokemonService[]> {
  //   return this.http.get<PokemonService[]>(this.pokemonApiUrl)
  //   }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemon){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ pokemon)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from "./PokemonModel.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  url: string = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}

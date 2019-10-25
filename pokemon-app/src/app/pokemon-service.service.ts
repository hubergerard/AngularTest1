import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  public getPokemonById(id: number) : Observable<Pokemon> {
    try {
      return this.http.get<Pokemon>(this.url + id + "/");
    }
    catch {
      return null;
    }
  }

  public getPokemonByName(name: string) : Observable<Pokemon> {
    try {
      return this.http.get<Pokemon>(this.url + name + "/");
    }
    catch {
      return null;
    }
  }

  public getAllPokemon() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }
}

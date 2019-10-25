import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private list;

  constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
      this.list= this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100');
      return this.list;

    }


  getPokemon(url) {
    this.list= this.http.get(url);
    return this.list;

  }
  sendToLocal(list){

  }

    }

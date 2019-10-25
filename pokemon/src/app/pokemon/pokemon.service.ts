import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  listPoke;
  Tabsub;
  listPok;
  
  constructor(private http: HttpClient) { }

  getPokemon(url){
    this.listPok= this.http.get(url);
    return this.listPok;

  }

  getPokemons(){
    let apiP = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    this.listPoke = this.http.get(apiP);
    return this.listPoke;
  }


  
}

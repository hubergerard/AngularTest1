import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  retourPourAffichage(nomVille: string) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokename;
    return this.httpClient.get(url);
  }
}

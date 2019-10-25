import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   urlApi // URL de l'API Pokemon
  constructor(private http: HttpClient) { }


  getObjet(Pokemon): Observable<any> {
    this.urlApi = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",'+Pokemon+'';  // URL de l'API
    return this.http.get<any>(this.urlApi);

  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PokemonApiService } from '../pokemon-api.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonSearch: FormGroup;
  public pokemonData: any;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonApiService: PokemonApiService
    ) { }

  ngOnInit() {
    this.pokemonSearch = this.formBuilder.group({
      pokemon:['']
    });
  }

  pokemonApiRequest(formValues){
    this.pokemonApiService
      .getPokemon(formValues.pokemon)
      .subscribe(data => this.pokemonData = data)
      console.log(this.pokemonData);
  }

}

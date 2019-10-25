import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemonForm: FormGroup;
  public pokemonData: any;

  constructor(private formBuilder: FormBuilder, private PokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      pokemon:[""]
    });
  }

  typePokemon(formValues) {
    this.PokemonService
      .getPokemon(formValues.pokemon)
      .subscribe( data => { this.pokemonData = data;
      console.log(this.pokemonData); });
  }

}

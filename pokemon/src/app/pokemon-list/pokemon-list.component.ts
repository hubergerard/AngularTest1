import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../Pokemon.model";
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  public pokemon: Pokemon[];
  name:string;
  url:string;
  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
}


  showPokemon() {
    this.PokemonService.getPokemons()
      .subscribe((data: Pokemon[]) => this.pokemon = data);
      console.log(this.pokemon)
  }
}

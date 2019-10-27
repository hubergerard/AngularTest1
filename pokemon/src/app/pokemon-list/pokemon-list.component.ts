import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../Pokemon.model";
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  public pokemons: Pokemon[];
  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.PokemonService.getPokemons()
    .subscribe((data: Pokemon[]) => this.pokemons = data);
    console.log(this.pokemons)
}

}

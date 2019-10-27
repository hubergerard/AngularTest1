import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../PokemonDetail.model';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../Pokemon.model";
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  public pokemonsDetail: PokemonDetail[];
  constructor(private PokemonService: PokemonService) { }
  url=" https://pokeapi.co/api/v2/pokemon/1/";
  ngOnInit() {
    this.PokemonService.getPokemon(this.url)
    .subscribe((data: PokemonDetail[]) => this.pokemonsDetail = data);
    console.log(this.pokemonsDetail)
}
}

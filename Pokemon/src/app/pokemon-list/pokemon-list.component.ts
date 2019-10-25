import { Component, OnInit } from '@angular/core';
import { PokemonServiceService} from '../pokemon-service.service';
import { Pokemon } from '../PokemonModel.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokemonServiceService: PokemonServiceService) { }

  ngOnInit() {
      this.pokemonServiceService.getPokemons().subscribe((data: Pokemon[]) => {
        this.pokemons = data;
        console.log(this.pokemons);
      })
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

}

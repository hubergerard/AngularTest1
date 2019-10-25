import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  private pokemons: Array<Pokemon> = [];
  @Input() pokemonItem: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe((datas)=>{
      this.pokemons = datas['results'];
    });
  }

  public displayStats(name) {
    this.pokemonService.getPokemonByName(name).subscribe((pokemon) => {
      this.pokemonItem = pokemon;
      console.log(this.pokemonItem);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokemonDetail } from '../PokemonDetail.model';
import { Pokemon } from '../Pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  pokemonDetail: PokemonDetail;

  constructor(private pokemonServiceService: PokemonServiceService) { }

  ngOnInit() {
  }

  function() {
    console.log(this.pokemon);

    this.pokemonServiceService.getPokemon(this.pokemon.url).subscribe((data: PokemonDetail) => {
      this.pokemonDetail = data;
      console.log(this.pokemonDetail);
    });
  }
}

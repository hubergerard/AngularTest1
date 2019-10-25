import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetail } from '../pokemon/pokemonDetail';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  constructor(private service : PokemonService) { }
  pokemonDetails
  @Input() pokemon
  ngOnInit() {
    this.getPokemon(this.pokemon)
  }
  getPokemon(nom) { 
    this.service.getPokemon(nom)
    .subscribe(data => {   
      this.pokemonDetails = new PokemonDetail(data['name'], data['sprites']['back_default'], [data['abilities'][0]['ability']['name'],data['abilities'][1]['ability']['name']],data['base_experience']);
    })
  }
}

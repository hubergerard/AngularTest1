import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons
  pokemon
  pokemonList = []
  constructor(private APIservice : PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
  }
  getPokemonList() {
    this.pokemons = this.APIservice.getPokemons()
    .subscribe(data => {   
      for (let i=0; i<data['results'].length; i++){
      this.pokemon = new Pokemon(i+1,data['results'][i]['name'],data['results'][i]['url']);
      this.pokemonList.push(this.pokemon);
    }
    console.log(this.pokemonList);
    })
  }
}

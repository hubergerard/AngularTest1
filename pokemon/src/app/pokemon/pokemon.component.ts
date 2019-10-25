import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../Pokemon.model";
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  name:string;
  url:string;
  pokemon;
  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
}


  showPokemon() {
    this.PokemonService.getPokemons()
      .subscribe((data: Pokemon[]) => this.pokemon = data);
      console.log(this.pokemon)
  }
 
}

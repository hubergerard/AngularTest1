import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

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
    this.PokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemon = data;
      console.log(this.pokemon);
    })
}


  showPokemon() {
    this.PokemonService.getPokemons()
      .subscribe((data: PokemonComponent) => this.pokemon = {
          name: data['name'],
          url:  data['url'],
      });
      console.log(this.pokemon)
  }
 
}

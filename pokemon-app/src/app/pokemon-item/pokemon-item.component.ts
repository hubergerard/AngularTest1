import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  public getFavorite() : string {
    return localStorage.getItem(this.pokemon.name) != null ? "💛" : "🧡";
  }

  public setFavorite() {
    if (localStorage.getItem(this.pokemon.name) == null) {
      localStorage.setItem(this.pokemon.name, "true");
    }
    else {
      localStorage.removeItem(this.pokemon.name);
    }
  }

}

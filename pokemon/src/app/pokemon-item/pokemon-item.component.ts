import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonItem;
  private pokedetail: any;
  private test;

  constructor(private services : PokemonService) { }

  ngOnInit() {

  }

  getDetail(url) {
    this.services.getPokemon(url).subscribe((data) => {
      this.pokedetail = data
      this.test = this.pokedetail
    });
    console.log(this.test)
  }
}

import { Component, OnInit, Input} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  @Input() pokemons;
  constructor(private service : PokemonService) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemonName: string;
  @Output() searchEvent = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  public search() {
    let request = this.pokemonService.getPokemonByName(this.pokemonName);

    request.subscribe((datas) => {
      this.searchEvent.emit(datas);
    });
  }
}

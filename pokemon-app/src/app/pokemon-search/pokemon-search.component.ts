import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  @Input() name: string;
  private pokemonResults: Object = undefined;
  @Output() pokemonToSearch = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  public search() {
    let request = this.pokemonService.getPokemonByName(this.name);
    
      request.subscribe((datas) => {

        if (!datas['ok']) {
          this.pokemonResults = datas;

          console.log(datas);
          this.pokemonToSearch.emit(this.pokemonResults);
        }
      });
  }
}

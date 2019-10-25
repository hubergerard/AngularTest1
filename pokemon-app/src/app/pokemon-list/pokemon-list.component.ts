import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  private pokemons: Array<Pokemon> = [];
  private offset: number = 0;
  private limit: number = 20;
  @Output() selectEvent = new EventEmitter<Pokemon>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.refreshList();
  }

  public selectPokemon(name: string) {
    this.pokemonService.getPokemonByName(name).subscribe((datas) => {
      this.selectEvent.emit(datas);
    });
  }

  public refreshList() {
    this.pokemonService.getAllPokemon(this.offset).subscribe((datas)=>{
      this.pokemons = [];
      for(let pokemon of datas['results']) {
        this.pokemonService.getPokemonByName(pokemon.name).subscribe((data) => {
          this.pokemons.push(data);
        });
      }
    });
  }

  public nextList(next: boolean) {
    this.offset += next ? this.limit : -this.limit;
    this.refreshList();
  }
  
}

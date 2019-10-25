import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonItem;
  pokeDetail;
  poketest;
  constructor(private service:PokemonService) { }

  ngOnInit() {
  }

  getDetail(url) {
    this.service.getPokemon(url).subscribe((data) => {
      this.pokeDetail = data
      this.poketest = this.pokeDetail
      console.log(this.poketest);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  tabPoke;
  pokeData;
  constructor(private service:PokemonService) { }

  ngOnInit() {
    let lienApi : Observable<any> = this.service.getPokemons();;
    lienApi.subscribe((data) => {
      this.tabPoke = data
      this.pokeData = this.tabPoke["results"];

    });
    
    }


}

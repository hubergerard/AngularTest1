import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})


export class PokemonComponent implements OnInit {
  private test;
  private pokedata;
  constructor(private service : PokemonService) { }

  ngOnInit() {
    let lienApi : Observable<any> = this.service.getPokemons();;
    lienApi.subscribe((data) => {
      this.test = data
      this.pokedata = this.test["results"]
    });
    console.log(this.pokedata)
  }

}

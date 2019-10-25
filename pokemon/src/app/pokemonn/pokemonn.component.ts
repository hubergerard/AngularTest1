import { Component, Input,OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonn',
  templateUrl: './pokemonn.component.html',
  styleUrls: ['./pokemonn.component.css']
})
export class PokemonnComponent implements OnInit {

  @Input () Pokemon : String;

  pokemonList: string;

  dataObject;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {

  }

  onClickMe(){
    this.PokemonService.getObjet(this.Pokemon).subscribe((data) => {
      console.log(data);
      this.dataObject = data;
      this.pokemonList = this.dataObject['name'];

    });
  }
}
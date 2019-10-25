import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokemonDetail } from '../PokemonDetail.interface';
import { Pokemon } from '../PokemonModel.interface';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private pokemonServiceService: PokemonServiceService) { }

  ngOnInit() {
  }

}

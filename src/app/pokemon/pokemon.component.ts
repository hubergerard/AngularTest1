import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  nomVille: string;

  profileForm: FormGroup;
  constructor(private w: PokemonService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      temperature: new FormControl('1', Validators.maxLength(4)),
    });

    this.w.retourPourAffichage(this.nomVille).subscribe((data) => this.processData(data));
    

  }

  processData(data: any) {
    console.log(data);
  }
}

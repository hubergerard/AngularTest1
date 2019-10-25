import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() pokemonSearch = new EventEmitter<any>();

  title = 'pokemon';

}

export class User {

  temperature: string;
  meteo: string;
  humidite: string;
  lieu: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon/pokemon-list/pokemon-item/pokemon-item.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: 'pokemon-item', component: PokemonItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

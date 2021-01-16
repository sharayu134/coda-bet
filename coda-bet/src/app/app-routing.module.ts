import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {SelectNineComponent} from '../app/select-nine/select-nine.component';
import { BetComponent } from './bet/bet.component';

const routes: Routes = [
  {path: '', component: SelectNineComponent},
  {path: 'select_nine', component: SelectNineComponent},
  {path: 'bet', component: BetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

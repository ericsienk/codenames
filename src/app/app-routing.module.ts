import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
    { path: 'answers', component: AnswersComponent },
    { path: '**', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

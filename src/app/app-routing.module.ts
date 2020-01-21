import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
    { path: 'answers', component: AnswersComponent },
    { path: 'reload', component: BoardComponent },
    { path: '**', component: GameComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

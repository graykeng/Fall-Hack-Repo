import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreBoardComponent } from './score-board/score-board.component';

const routes: Routes = [
  { path: 'score-board', component: ScoreBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

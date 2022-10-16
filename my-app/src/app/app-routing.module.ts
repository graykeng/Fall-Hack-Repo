import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PlaygroundComponent } from './playground/playground.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { StartPageComponent } from './start-page/start-page.component';

// import { CoreModule } from '@core/core.module';
// import { CoreCommonModule } from '@core/common.module';

const routes: Routes = [

  {
    path:'',
    component: StartPageComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
    loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule)
  },
  { path: 'score-board',
    component: ScoreBoardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StartPageComponent } from './start-page/start-page/start-page.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    // StartPageComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

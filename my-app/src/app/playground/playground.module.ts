import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module'




@NgModule({
  declarations: [ 
    PlaygroundComponent
],
  imports: [
    CommonModule,
  ],
  providers: [PlaygroundRoutingModule]

})
export class PlaygroundModule { }


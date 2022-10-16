
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
>>>>>>> main
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

<<<<<<< HEAD
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
=======

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> main
})
export class AppModule { }

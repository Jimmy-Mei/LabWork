import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';

import { SimpleService } from './simple.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

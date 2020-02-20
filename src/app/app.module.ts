import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { P01HomeComponent } from './pages/p01-home/p01-home.component';

@NgModule({
  declarations: [
    AppComponent,
    P01HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

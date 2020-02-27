import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica/musica.component';
import { InterpreteComponent } from './interprete/interprete/interprete.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    InterpreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

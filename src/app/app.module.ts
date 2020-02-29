import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMusicaComponent } from './musica/lista-musica/lista-musica.component';
import { InterpreteComponent } from './interprete/interprete/interprete.component';
import { AlbumComponent } from './album/album/album.component';
import { NovaMusicaComponent } from './musica/nova-musica/nova-musica.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMusicaComponent,
    InterpreteComponent,
    AlbumComponent,
    NovaMusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

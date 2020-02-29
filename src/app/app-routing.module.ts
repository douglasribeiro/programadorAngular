import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMusicaComponent } from './musica/lista-musica/lista-musica.component';


const routes: Routes = [
  { path: '', redirectTo: 'listamusica', pathMatch: 'full' },
  { path: 'listamusica', component: ListaMusicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

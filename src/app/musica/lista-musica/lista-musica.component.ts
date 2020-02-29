import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../musica';
import { MusicaService } from '../musica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.css']
})
export class ListaMusicaComponent implements OnInit {

  musicas: Observable<Musica[]>;

  constructor(private musicaService: MusicaService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.musicas = this.musicaService.getMusicaList();
    console.log(this.musicas);
  }

  deleteMusica(id: number){
    this.musicaService.deleteMusica(id).subscribe(data =>{
      console.log(data);
      this.reloadData;
    }

    )
  }

  musicaDetalhe(id: number){
    this.router.navigate(['musicaDetails',id]);
  }

  updateMusica(id: number){
    this.router.navigate(['musicaDetails',id]);
  }

  interprete(id: number){
    this.router.navigate(['interprete', id]);
  }


}

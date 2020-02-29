import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private baseUrl = "http://localhost:8083/musica";

  constructor(private http: HttpClient) { }

  getMusica(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMusica(musica: Object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, musica);
  }

  updateMusica(id: number, value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMusica(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }


  getMusicaList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}

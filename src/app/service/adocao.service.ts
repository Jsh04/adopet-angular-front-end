import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Adocao } from '../models/adocao';

@Injectable({
  providedIn: 'root'
})
export class AdocaoService {

  readonly API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  FazerAdocao(adocao: Adocao){
    return this.http.post<Adocao>(this.API_URL + '/adocao', adocao)
  }
}

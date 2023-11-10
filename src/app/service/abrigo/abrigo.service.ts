import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abrigo } from 'src/app/models/abrigo';

@Injectable({
  providedIn: 'root'
})
export class AbrigoService {

  readonly API_URL: string = "http://localhost:5286"

  constructor(private http: HttpClient) { }

  CadastrarAbrigo(abrigo: Abrigo){
    return this.http.post<Abrigo>(this.API_URL + '/abrigo', abrigo)
  }

}

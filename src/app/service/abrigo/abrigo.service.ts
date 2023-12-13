import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abrigo } from 'src/app/models/abrigo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbrigoService {

  readonly API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  CadastrarAbrigo(abrigo: Abrigo){
    return this.http.post<Abrigo>(this.API_URL + '/abrigo', abrigo)
  }

}

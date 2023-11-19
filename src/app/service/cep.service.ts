import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CepResponse } from '../interfaces/CepResponse';


@Injectable({
  providedIn: 'root'
})
export class CepService {


  readonly API_VIA_CEP: string = 'https://viacep.com.br/ws/'

  constructor(private http: HttpClient) { }

  FazerRequisicaoViaCep(cep: string) {
    return this.http.get<CepResponse>(this.API_VIA_CEP + `${cep}/json`)
  }
  
}

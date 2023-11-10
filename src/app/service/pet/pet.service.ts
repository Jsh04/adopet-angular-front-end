import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  readonly API_URL: string = "http://localhost:5286"

  constructor(private http: HttpClient) { }

  RetornarListaPets(abrigoId: number){
    this.http.get<Pet[]>(this.API_URL + '/pet')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  readonly API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  RetornarListaPets(abrigoId: string, take: number, skip: number){
    return this.http.get<Pet[]>(this.API_URL + `/pet/pets-disponiveis/${abrigoId}?skip=${skip}&take=${take}`)
  }

  CadastrarPet(pet: Pet){
    return this.http.post<Pet>(this.API_URL + '/pet', pet);
  }

  ExcluirPet(idPet: number){
    return this.http.delete(this.API_URL + `/pet/${idPet}`);
  }

  BuscarPetPorId(idPet: number){
    return this.http.get<Pet>(this.API_URL + `/pet/${idPet}`);
  }
}

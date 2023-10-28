import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutor } from '../models/tutor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  readonly API_URL: string = "http://localhost:5286"

  constructor(private http: HttpClient) {}

  CadastrarTutor(tutor: Tutor): Observable<Tutor> {
    console.log(tutor);
    return this.http.post<Tutor>(this.API_URL + '/tutor', tutor)
  }
}

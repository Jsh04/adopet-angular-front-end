import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutor } from '../../models/tutor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  readonly API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  CadastrarTutor(tutor: Tutor): Observable<Tutor> {
    console.log(tutor);
    return this.http.post<Tutor>(this.API_URL + '/tutor', tutor)
  }
}

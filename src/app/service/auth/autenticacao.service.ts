import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient, private usuarioService: UserService) { }

  login(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      { email, senha },
      { observe: 'response'}).pipe(
        tap((response) => {
          const authToken = response.body?.token || '';
          this.usuarioService.salvarToken(authToken);
        })
      );
  }
}

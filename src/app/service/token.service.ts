import { Injectable } from '@angular/core';

const KEY: string = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string){
    return localStorage.setItem(KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(KEY);
  }

  retornarToken(): string | null{
    return localStorage.getItem(KEY)
  }

  possuiToken(){
    return !!this.retornarToken();
  }
}

import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';
import { jwtDecode }  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private tokenService: TokenService) {}

  salvarToken(token: string){
    this.tokenService.salvarToken(token);
  }

  logout(){
    this.tokenService.excluirToken()
  }

  retornarRole(){
    const token = this.tokenService.retornarToken() || '';
    
    
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}

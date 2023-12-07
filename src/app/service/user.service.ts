import { EventEmitter, Injectable } from '@angular/core';
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

  RetornarIdUsuario() {
    const payload: any = this.RetornarPayload()
    return payload.id;
  }

  private RetornarPayload(){
    const token = this.tokenService.retornarToken() || '';
    const payload: any = jwtDecode(token)  
    return payload;
  }

  logout(){
    this.tokenService.excluirToken()
  }

  retornarRole(){
    const payload: any =  this.RetornarPayload();
    return payload.role;
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  eParaMostrarSenha: boolean = false
  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {}

  LogarUsuario(form: NgForm){
    if (form.invalid) {
      alert("Preencha os campos corretamente")
      return;
    }
    const usuario = new Usuario()
    usuario.Email = form.controls['email'].value;
    usuario.Senha = form.controls['Senha'].value;
    this.autenticacaoService.login(usuario.Email, usuario.Senha);
  }

  MostrarSenha(){
    if (this.eParaMostrarSenha) 
      this.eParaMostrarSenha = false 
    else 
      this.eParaMostrarSenha = true
  }

}

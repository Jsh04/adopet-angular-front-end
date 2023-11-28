import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacaoService } from 'src/app/service/auth/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  eParaMostrarSenha: boolean = false
  loading: boolean = false
  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {}

  LogarUsuario(form: NgForm){
    this.loading = true
    if (form.invalid) {
      alert("Preencha os campos corretamente")
      return;
    }
    const usuario = new Usuario()
    usuario.Email = form.controls['email'].value;
    usuario.Senha = form.controls['Senha'].value;
    this.autenticacaoService.login(usuario.Email, usuario.Senha).subscribe(
      (value) => {
        this.loading = false
        alert("Usuario logado com sucesso")
        this.router.navigate(['/dashboard']);
      },
      (erro: HttpErrorResponse) => {
        if (erro.status == 400) {
          alert("Erro no login, verifique os dados e tente novamente!")
          this.loading = false;
          form.controls['email'].reset();
          form.controls['Senha'].reset();
        }  
      }
    );
   
  }

  MostrarSenha(){
    if (this.eParaMostrarSenha) 
      this.eParaMostrarSenha = false 
    else 
      this.eParaMostrarSenha = true
  }

}

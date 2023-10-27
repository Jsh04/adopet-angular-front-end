import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome:string = ''
  email: string = ''
  Senha: string = ''
  ConfirmaSenha:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  CadastrarTutor(evento: Event){

  }

}

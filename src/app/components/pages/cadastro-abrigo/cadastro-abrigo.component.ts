import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CepResponse } from 'src/app/interfaces/CepResponse';
import { Abrigo } from 'src/app/models/abrigo';
import { AbrigoService } from 'src/app/service/abrigo/abrigo.service';
import { CepService } from 'src/app/service/cep.service';


@Component({
  selector: 'app-cadastro-abrigo',
  templateUrl: './cadastro-abrigo.component.html',
  styleUrls: ['./cadastro-abrigo.component.scss']
})
export class CadastroAbrigoComponent implements OnInit {
  eParaMostrarSenha: boolean = false
  eParaMostrarSenhaConfimada: boolean = false

  constructor(private http: HttpClient, 
    private abrigoService: AbrigoService, 
    private router: Router,
    private cepService: CepService) { }

  ngOnInit(): void {
  }

  CadastrarAbrigo(form: NgForm){
    if (form.invalid) {
      alert("Preencha os dados corretamente")
      return
    }
    const abrigo: Abrigo = new Abrigo();
    abrigo.name = form.controls['nome'].value;
    abrigo.email = form.controls['email'].value;
    abrigo.senha = form.controls['Senha'].value;
    abrigo.endereco.cep = form.controls['cep'].value;
    abrigo.endereco.bairro = form.controls['bairro'].value;
    abrigo.endereco.cidade = form.controls['cidade'].value;
    abrigo.endereco.estado = form.controls['estado'].value;
    abrigo.endereco.logradouro = form.controls['logradouro'].value;
    this.abrigoService.CadastrarAbrigo(abrigo).subscribe(value => {
      alert("Abrigo Cadastrado com sucesso")
      this.router.navigateByUrl('/login')
    })
  }

  MostrarSenha(){
    if (this.eParaMostrarSenha) 
      this.eParaMostrarSenha = false 
    else 
      this.eParaMostrarSenha = true
  }

  MostrarSenhaConfirmar(){
    if (this.eParaMostrarSenhaConfimada) 
      this.eParaMostrarSenhaConfimada = false 
    else 
      this.eParaMostrarSenhaConfimada = true
  }

  PreencherFormulario(dadosCep: CepResponse, form: NgForm){
    form.controls['logradouro'].setValue(dadosCep.logradouro)
    form.controls['bairro'].setValue(dadosCep.bairro)
    form.controls['cidade'].setValue(dadosCep.localidade)
    form.controls['estado'].setValue(dadosCep.uf)
  }

  BuscarCEP(form: NgForm): void{
    const cep: string = form.controls['cep'].value
    const response = this.cepService.FazerRequisicaoViaCep(cep)
    response.subscribe(value => {
      this.PreencherFormulario(value, form);
    })
  }
  
}

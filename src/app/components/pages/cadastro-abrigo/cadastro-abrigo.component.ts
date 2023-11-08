import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface CepResponse{
  cep: string, 
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
}

@Component({
  selector: 'app-cadastro-abrigo',
  templateUrl: './cadastro-abrigo.component.html',
  styleUrls: ['./cadastro-abrigo.component.scss']
})
export class CadastroAbrigoComponent implements OnInit {

  readonly API_VIA_CEP: string = 'https://viacep.com.br/ws/'
  eParaMostrarSenha: boolean = false
  eParaMostrarSenhaConfimada: boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  CadastrarAbrigo(form: NgForm){

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
    const response = this.FazerRequisicaoViaCep(cep)
    response.subscribe(value => {
      this.PreencherFormulario(value, form);
    })
  }
  
  FazerRequisicaoViaCep(cep: string) {
    const cepFormatado: string = cep.replace("-", "");
    return this.http.get<CepResponse>(this.API_VIA_CEP + `${cepFormatado}/json`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { CepResponse } from 'src/app/interfaces/CepResponse';
import { Pet } from 'src/app/models/pet';
import { CepService } from 'src/app/service/cep.service';
import { PetService } from 'src/app/service/pet/pet.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.scss']
})
export class CadastroPetComponent implements OnInit {

  loading: boolean = false

  constructor(
    private http: HttpClient,
    private petService: PetService,
    private cepService: CepService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  BuscarCEP(form: NgForm){
    let cep: string = form.controls['cep'].value
    if (cep.includes('-')) 
      cep = cep.replace("-", "")
    this.cepService.FazerRequisicaoViaCep(cep).subscribe(value => {
      this.PreencherFormulario(value, form);
    })
  }

  PreencherFormulario(dadosCep: CepResponse, form: NgForm){
    form.controls['logradouro'].setValue(dadosCep.logradouro)
    form.controls['bairro'].setValue(dadosCep.bairro)
    form.controls['cidade'].setValue(dadosCep.localidade)
    form.controls['estado'].setValue(dadosCep.uf)
  }

  CadastrarPet(form: NgForm, evento: Event): void{
    this.loading = true
    evento.preventDefault();
    if (form.invalid) {
      this.loading = false
      alert("Preencha os dados corretamente")
      return;
    }
    const pet = new Pet();
    pet.nome = form.controls['nome'].value;
    pet.descricao = form.controls['descricao'].value;
    pet.idade = form.controls['idade'].value;
    pet.imagem = form.controls['imagem'].value;
    pet.adotado = false;
    pet.abrigoId = this.userService.RetornarIdUsuario();
    pet.endereco.cep = form.controls['cep'].value;
    pet.endereco.bairro = form.controls['bairro'].value;
    pet.endereco.cidade = form.controls['cidade'].value;
    pet.endereco.estado = form.controls['estado'].value;
    pet.endereco.logradouro = form.controls['logradouro'].value;
    console.log(pet);
    
    this.petService.CadastrarPet(pet).subscribe(value => {
      this.loading = false
      alert("Pet cadastrado com sucesso");
      this.router.navigateByUrl('/pets');
    });
  }

}

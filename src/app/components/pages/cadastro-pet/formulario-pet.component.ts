import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { CepResponse } from 'src/app/interfaces/CepResponse';
import { Pet } from 'src/app/models/pet';
import { CepService } from 'src/app/service/cep.service';
import { PetService } from 'src/app/service/pet/pet.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-formulario-pet',
  templateUrl: './formulario-pet.component.html',
  styleUrls: ['./formulario-pet.component.scss']
})
export class FormularioPetComponent implements OnInit {

  loading: boolean = false

  constructor(
    private http: HttpClient,
    private petService: PetService,
    private cepService: CepService,
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ) { }

    readonly petEditar: Pet = new Pet();

  ngOnInit(): void {
    let idPet: number | undefined;
    this.activedRoute.params.subscribe(params => idPet = params['id'])
    if (idPet != undefined) {
      this.petService.BuscarPetPorId(idPet).subscribe(value => {
        this.petEditar.nome = value.nome;
        this.petEditar.descricao = value.descricao;
        this.petEditar.imagem = value.imagem;
        this.petEditar.endereco.cep = value.endereco.cep
        this.petEditar.endereco.bairro = value.endereco.bairro
        this.petEditar.endereco.logradouro = value.endereco.logradouro
        this.petEditar.endereco.cidade = value.endereco.cidade
        this.petEditar.endereco.estado = value.endereco.estado
        this.petEditar.idade = value.idade;
      })
    }
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

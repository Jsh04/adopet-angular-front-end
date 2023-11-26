import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  idPet: number | undefined

  @ViewChild("f")
  f!: NgForm;

  constructor(
    private http: HttpClient,
    private petService: PetService,
    private cepService: CepService,
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => this.idPet = params['id'])
    if (this.idPet != undefined) {
      this.petService.BuscarPetPorId(this.idPet).subscribe(value => {
        this.f.controls['nome'].setValue(value.nome);
        this.f.controls['descricao'].setValue(value.descricao); 
        this.f.controls['imagem'].setValue(value.imagem);
        this.f.controls['cep'].setValue(value.endereco.cep);
        this.f.controls['bairro'].setValue(value.endereco.bairro);
        this.f.controls['logradouro'].setValue(value.endereco.logradouro);
        this.f.controls['cidade'].setValue(value.endereco.cidade);
        this.f.controls['estado'].setValue(value.endereco.estado);
        this.f.controls['idade'].setValue(value.idade);
      })
    }
  }

  private RetornarTipoFormEditar(): boolean{
    return this.router.url.includes("editar");
  }

  RetornarNomeBotao(): string {
    if(this.RetornarTipoFormEditar())
      return "Editar"
    else
      return "Cadastrar!"
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

  SubmitPet(form: NgForm, evento: Event): void{
    this.loading = true
    evento.preventDefault();
    console.log(form);
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

    
    if (this.RetornarTipoFormEditar()) {
      this.petService.EditarPet(this.idPet!, pet).subscribe(value => {
        this.loading = false;
        alert("Pet editado com sucesso");
        this.router.navigateByUrl('/pets');
      });
    }else{
      this.petService.CadastrarPet(pet).subscribe(value => {
        this.loading = false
        alert("Pet cadastrado com sucesso");
        this.router.navigateByUrl('/pets');
      });
    }
    
  }

}

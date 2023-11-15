import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/service/pet/pet.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tabela-pets',
  templateUrl: './tabela-pets.component.html',
  styleUrls: ['./tabela-pets.component.scss']
})
export class TabelaPetsComponent implements OnInit {



  ListaPetDisponiveis: Pet[] = []

  constructor(
    private petService: PetService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
    ) { }

  

  ngOnInit(): void {
    const abrigoId = this.userService.RetornarIdUsuario();
    this.petService.RetornarListaPets(abrigoId, 10, 0).subscribe(value => {
      console.log(value);
      
      this.ListaPetDisponiveis = value
    });
  }
  RetornarStringAdotado(adotado: boolean): string {
    if (adotado) return "Sim"
    else return "Não"
  }

}
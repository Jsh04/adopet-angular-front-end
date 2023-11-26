import { Component, OnInit } from '@angular/core';
import { Abrigo } from 'src/app/models/abrigo';
import { Endereco } from 'src/app/models/endereco';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/service/pet/pet.service';

@Component({
  selector: 'app-pets-disponiveis',
  templateUrl: './pets-disponiveis.component.html',
  styleUrls: ['./pets-disponiveis.component.scss']
})
export class PetsDisponiveisComponent implements OnInit {

  ListaPetsDisponiveis: Pet[] = [
    {
      nome: "Dunga",
      idade: '2 anos',
      descricao: 'Porte pequeno Calmo e educado',
      adotado: false,
      imagem: '../../../../assets/Imagens-animais-09-1.png',
      abrigo: {
        endereco: {
          estado: 'Rio de Janeiro (RJ)'
        }as Endereco
      }as Abrigo
    } as Pet,
    {
      nome: "Dunga",
      idade: '2 anos',
      descricao: 'Porte pequeno Calmo e educado',
      adotado: false,
      imagem: '../../../../assets/Imagens-animais-09-1.png',
      abrigo: {
        endereco: {
          estado: 'Rio de Janeiro (RJ)'
        }as Endereco
      }as Abrigo
    } as Pet,
    {
      nome: "Dunga",
      idade: '2 anos',
      descricao: 'Porte pequeno Calmo e educado',
      adotado: false,
      imagem: '../../../../assets/Imagens-animais-09-1.png',
      abrigo: {
        endereco: {
          estado: 'Rio de Janeiro (RJ)'
        }as Endereco
      }as Abrigo
    } as Pet,
    {
      nome: "Dunga",
      idade: '2 anos',
      descricao: 'Porte pequeno Calmo e educado',
      adotado: false,
      imagem: '../../../../assets/Imagens-animais-09-1.png',
      abrigo: {
        endereco: {
          estado: 'Rio de Janeiro (RJ)'
        }as Endereco
      }as Abrigo
    } as Pet   
  ];
  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.RetornarListaPets(0, 10).subscribe(value => {
      this.ListaPetsDisponiveis = value
    })
  }

}

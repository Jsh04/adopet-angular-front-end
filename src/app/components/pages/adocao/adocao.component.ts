import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Adocao } from 'src/app/models/adocao';
import { AdocaoService } from 'src/app/service/adocao.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.scss']
})
export class AdocaoComponent implements OnInit {

  loading: boolean = false
  constructor(
    private adocaoService: AdocaoService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  FazerAdocao(form: NgForm): void{
    if (form.invalid) {
      alert("Preencha os dados corretamente")
      return;
    }
    const idTutor = this.userService.RetornarIdUsuario();
    const adocao = new Adocao()
    adocao.mensagem = form.controls['mensagem'].value
    adocao.telefone = form.controls['telefone'].value
    adocao.nomePet = form.controls['nome'].value
    adocao.tutorId = idTutor;


  }

}

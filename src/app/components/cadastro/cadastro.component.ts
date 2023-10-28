import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tutor } from 'src/app/models/tutor';
import { TutorService } from 'src/app/service/tutor-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  eParaMostrarSenha: boolean = false
  eParaMostrarSenhaConfimada: boolean = false

  constructor(private tutorService: TutorService, private router: Router) { }

  ngOnInit(): void {
  }

  CadastrarTutor(form: NgForm){
    console.log(form.controls);
    
    
  }

  MostrarSenhaConfirmar(){
    if (this.eParaMostrarSenhaConfimada) 
      this.eParaMostrarSenhaConfimada = false 
    else 
      this.eParaMostrarSenhaConfimada = true
  }

  MostrarSenha(){
    if (this.eParaMostrarSenha) 
      this.eParaMostrarSenha = false 
    else 
      this.eParaMostrarSenha = true
  }

}

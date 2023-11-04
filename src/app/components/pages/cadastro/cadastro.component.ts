import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

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

  ngOnInit(): void {}

  CadastrarTutor(form: NgForm): void{
    if (form.invalid) {
      console.log(form.controls);
      
      return;
    }
    
    const tutor: Tutor = new Tutor(
    form.controls['nome'].value, 
    form.controls['email'].value, 
    form.controls['Senha'].value,
    form.controls['confirmaSenha'].value);

    this.tutorService.CadastrarTutor(tutor).pipe(
      catchError((error: any) => {
        console.error('Erro na solicitação HTTP:', error);
        return throwError(error);
      }
    )).subscribe(response => {
      alert("Tutor cadastrado com sucesso");
      this.limparFormulario(form);
      this.router.navigateByUrl('login');
    });
  }
  limparFormulario(form: NgForm):void {
    form.controls['nome'].setValue("");
    form.controls['email'].setValue("");
    form.controls['Senha'].setValue("")
    form.controls['confirmaSenha'].setValue("");
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

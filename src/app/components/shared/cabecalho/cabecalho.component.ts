import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss', './cabecalho-menu.component.scss']
})
export class CabecalhoComponent implements OnInit {


  mostrarMenuUsuario: boolean = false

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  EstaLogado(): boolean{
    return this.userService.estaLogado();
  }

  MostrarMenu() {
    if (this.mostrarMenuUsuario) 
      this.mostrarMenuUsuario = false
    else
      this.mostrarMenuUsuario = true
  }
  Deslogar(): void {
    this.userService.logout();
    this.router.navigateByUrl('');
  }

}

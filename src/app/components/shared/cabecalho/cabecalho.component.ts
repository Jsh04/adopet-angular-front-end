import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router } from '@angular/router';
import { Subject, every} from 'rxjs';
import { filter } from 'rxjs/operators';
import { AbrigoService } from 'src/app/service/abrigo/abrigo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss', './cabecalho-menu.component.scss']
})
export class CabecalhoComponent implements OnInit {
  mostrarMenuUsuario: boolean = false;
  readonly ABRIGO_ROLE: string = "Abrigo";
  rotaAtual: string  = '';
  ativarRota: boolean = false;
  constructor(
    private userService: UserService, 
    private router: Router,
  ) {
    const listRoutas: string[] = [  'cadastro', 'login', 'cadastro/abrigo' ]
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.rotaAtual = value.url;

        listRoutas.forEach(rota =>{
          if (this.rotaAtual.includes(rota) || this.rotaAtual == '/') {
            this.ativarRota = true;
          }
        })
        
      }
    })

   }

  ngOnInit(): void {} 
  RequisicaoParaPerfil() {
    this.router.navigateByUrl(`/perfil/${this.userService.RetornarIdUsuario()}`);
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { PetsDisponiveisComponent } from './components/pages/pets-disponiveis/pets-disponiveis.component';
import { CadastroAbrigoComponent } from './components/pages/cadastro-abrigo/cadastro-abrigo.component';
import { FormularioPetComponent } from './components/pages/cadastro-pet/formulario-pet.component';
import { TabelaPetsComponent } from './components/pages/tabela-pets/tabela-pets.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AdocaoComponent } from './components/pages/adocao/adocao.component';
import { TelaSucessoComponent } from './components/pages/tela-sucesso/tela-sucesso.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'pets-disponiveis',
    component: PetsDisponiveisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tutor',
    children: [
      {
        path: 'perfil/:id',
        component: PerfilComponent
      },
      {
        path: 'adocao/:id',
        component: AdocaoComponent
      }
    ]
  },
  {
    path: "sucesso",
    component: TelaSucessoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'abrigo',
    children: [
      {
        path: 'cadastro',
        component: CadastroAbrigoComponent
      },
      {
        path: 'perfil/:id',
        component: PerfilComponent
      }
    ],
  },
  {
    path: 'pets',
    canActivate: [AuthGuard],
    data: {
      roles: "Abrigo"
    },
    children: [
      {
        path: 'cadastro',
        component: FormularioPetComponent
      },
      {
        path: 'editar/:id',
        component: FormularioPetComponent
      },
      {
        path: '',
        component: TabelaPetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

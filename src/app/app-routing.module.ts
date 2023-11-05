import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { PetsDisponiveisComponent } from './components/pages/pets-disponiveis/pets-disponiveis.component';
import { CadastroAbrigoComponent } from './components/pages/cadastro-abrigo/cadastro-abrigo.component';

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
    path: 'pets',
    component: PetsDisponiveisComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'abrigo',
    children: [
      {
        path: 'cadastro',
        component: CadastroAbrigoComponent
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

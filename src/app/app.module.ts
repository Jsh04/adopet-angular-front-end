import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/shared/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/shared/rodape/rodape.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from './components/shared/loader/loader.module';
import { LoginComponent } from './components/pages/login/login.component';
import { MensagemComponent } from './components/shared/mensagem/mensagem.component';
import { PetsDisponiveisComponent } from './components/pages/pets-disponiveis/pets-disponiveis.component';
import { CardPetComponent } from './components/shared/card-pet/card-pet.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    MensagemComponent,
    PetsDisponiveisComponent,
    CardPetComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

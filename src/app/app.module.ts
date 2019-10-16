import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaService } from './turmas/turma.service';
import { HttpClientModule } from '@angular/common/http';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioFelicidadeAutenticaComponent } from './formulario-felicidade-autentica/formulario-felicidade-autentica.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
 // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'formulario', component: FormularioFelicidadeAutenticaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    FormularioFelicidadeAutenticaComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    AppRoutingModule,
    ModalModule.forRoot()
  ],

  providers: [
    TurmaService,
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

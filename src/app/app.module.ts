import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaService } from './turmas/turma.service';
import { HttpClientModule } from '@angular/common/http';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AgendasComponent } from './agendas/agendas.component';
import { AgendaService } from './agendas/agenda.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    AgendasComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],

  providers: [
    TurmaService,
    AutenticacaoService,
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

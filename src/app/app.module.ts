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
import { AgendasComponent } from './agendas/agendas.component';
import { AgendaService } from './agendas/agenda.service';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    AgendasComponent,
    AgendaEditComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [
    TurmaService,
    AutenticacaoService,
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

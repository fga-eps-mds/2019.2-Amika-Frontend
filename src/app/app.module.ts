import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { GruposComponent, CriarGruposDialogo } from './grupos/grupos.component';
import { GrupoService } from './grupos/grupo.service';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';
import { RouterModule, Routes} from '@angular/router';
import { AgendasComponent } from './agendas/agendas.component';
import { AgendaService } from './agendas/agenda.service';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { HumorComponent } from './humor/humor.component';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AreaInformativaComponent } from './area-informativa/area-informativa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GraficoHumorComponent } from './grafico-humor/grafico-humor.component';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarTurmasDialogo } from './turmas/turmas.component';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import { ListaDeMatriculaComponent } from './lista-de-matricula/lista-de-matricula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    GruposComponent,
    GrupoEditComponent,
    AgendasComponent,
    AgendaEditComponent,
    HumorComponent,
    PerfilUsuarioComponent,
    AreaInformativaComponent,
    PerfilUsuarioComponent,
    GraficoHumorComponent,

    CriarTurmasDialogo,
    CriarGruposDialogo,
    AlunoAutoRegistroComponent,
    ListaDeMatriculaComponent,
    PageNotFoundComponent,
  ],
  entryComponents: [
    CriarTurmasDialogo,
    CriarGruposDialogo,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    RatingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],

  providers: [
    TurmaService,
    AutenticacaoService,
    GrupoService,
    AgendaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

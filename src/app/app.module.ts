import { AlertaService } from './alerta.service';
import { FormularioService } from './formulario.service';
import { RequisicoesService } from './requisicoes.service';
import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Inject } from '@angular/core';
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
import { FormularioFelicidadeAutenticaComponent, FormularioFelicidadeAutenticaDialog } from './formulario-felicidade-autentica/formulario-felicidade-autentica.component';
import { FormularioSatisfacaoComVidaComponent, FormularioSatisfacaoComVidaDialog, FormularioEnviadoDialog } from './formulario-satisfacao-com-vida/formulario-satisfacao-com-vida.component';
import { GruposComponent, CriarGruposDialogo } from './grupos/grupos.component';
import { GrupoService } from './grupos/grupo.service';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';
import { AgendasComponent } from './agendas/agendas.component';
import { AgendaService } from './agendas/agenda.service';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { HumorComponent } from './humor/humor.component';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AreaInformativaComponent } from './area-informativa/area-informativa.component';
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
import { GrupoComponent } from './grupo/grupo.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { CriarAgendasDialogo } from './agendas/agendas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormularioFelidadeAutenticaService } from './formulario-felicidade-autentica/formulario_felicidade_autentica.service';

const appRoutes: Routes = [
];
import { VisualizarMateriaisComponent } from './visualizar-materiais/visualizar-materiais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    FormularioFelicidadeAutenticaComponent,
    FormularioSatisfacaoComVidaComponent,
    GruposComponent,
    GrupoEditComponent,
    AgendasComponent,
    AgendaEditComponent,
    HumorComponent,
    AreaInformativaComponent,
    GraficoHumorComponent,

    CriarTurmasDialogo,
    CriarGruposDialogo,
    AlunoAutoRegistroComponent,
    ListaDeMatriculaComponent,
    CriarAgendasDialogo,
    PageNotFoundComponent,
    GrupoComponent,
    MateriaisComponent,
    FormularioSatisfacaoComVidaDialog,
    FormularioFelicidadeAutenticaDialog,
    FormularioEnviadoDialog,
    VisualizarMateriaisComponent,
  ],
  entryComponents: [
    CriarTurmasDialogo,
    CriarAgendasDialogo,
    CriarGruposDialogo,
    FormularioSatisfacaoComVidaDialog,
    FormularioFelicidadeAutenticaDialog,
    FormularioEnviadoDialog,
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
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    RatingModule,
    FormsModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],

  providers: [
    TurmaService,
    AutenticacaoService,
    GrupoService,
    AgendaService,
    RequisicoesService,
    FormularioService,
    AlertaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

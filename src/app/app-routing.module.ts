import { GrupoComponent } from './grupo/grupo.component';
import { GraficoHumorComponent } from './grafico-humor/grafico-humor.component';
import { HumorComponent } from './humor/humor.component';
import { NgModule, Component } from '@angular/core';
import { AreaInformativaComponent } from './area-informativa/area-informativa.component';
import { AutenticacaoService } from './autenticacao.service';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';
import { AgendasComponent } from './agendas/agendas.component';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import { ListaDeMatriculaComponent } from './lista-de-matricula/lista-de-matricula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { AgendasRealizadasComponent } from './agendas-realizadas/agendas-realizadas.component';
import { VisualizarMateriaisComponent } from './visualizar-materiais/visualizar-materiais.component';
import * as jwt_decode from "jwt-decode";

function isAdmin() {
  try {
    console.log(jwt_decode(localStorage.getItem('Authorization'))['superusuario']);
    return jwt_decode(localStorage.getItem('Authorization'))['superusuario'];
  }
  catch (e) {
    return false;
  }
}

const routes: Routes = [
  { path: '',      component: isAdmin() ? AgendasComponent : AgendasRealizadasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'grupos', component: GruposComponent},
  { path: 'grupo', component: GrupoComponent},
  { path: 'editar_grupo/:id', component: GrupoEditComponent},
  { path: 'humor', component: HumorComponent},
  { path: 'turmas', component: TurmasComponent, canActivate: [AutenticacaoService]  },
  { path: 'turmas_editar/:id', component: TurmaEditComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda', component: AgendasComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda-edit/:id', component: AgendaEditComponent, canActivate: [AutenticacaoService]},
  { path: 'agendas-realizadas', component: AgendasRealizadasComponent },
  { path: 'area-informativa', component: AreaInformativaComponent},
  { path: 'grafico/:id', component : GraficoHumorComponent},
  { path: 'cadastrar', component: AlunoAutoRegistroComponent, canActivate: [AutenticacaoService] },
  { path: 'lista', component: ListaDeMatriculaComponent, canActivate: [AutenticacaoService] },
  { path: 'manter-materiais', component: MateriaisComponent, canActivate: [AutenticacaoService] },
  { path: 'materiais', component: VisualizarMateriaisComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

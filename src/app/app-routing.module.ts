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
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import { ListaDeMatriculaComponent } from './lista-de-matricula/lista-de-matricula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MateriaisComponent } from './materiais/materiais.component';

const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'grupos', component: GruposComponent},
  { path: 'editar_grupo/:id', component: GrupoEditComponent},
  { path: 'humor', component: HumorComponent},
  { path: 'turmas', component: TurmasComponent, canActivate: [AutenticacaoService]  },
  { path: 'turmas_editar/:id', component: TurmaEditComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda', component: AgendasComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda-edit/:id', component: AgendaEditComponent, canActivate: [AutenticacaoService]},
  { path: 'area-informativa', component: AreaInformativaComponent },
  { path: 'perfil_usuario', component : PerfilUsuarioComponent },
  { path: 'cadastrar', component: AlunoAutoRegistroComponent, canActivate: [AutenticacaoService] },
  { path: 'lista', component: ListaDeMatriculaComponent, canActivate: [AutenticacaoService] },
  { path: 'manter-materiais', component: MateriaisComponent, canActivate: [AutenticacaoService] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

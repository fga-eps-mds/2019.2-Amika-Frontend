import { AutenticacaoService } from './autenticacao.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';
import { AgendasComponent } from './agendas/agendas.component';

const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'turmas', component: TurmasComponent},
  {path: 'turmas_editar/:id', component: TurmaEditComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'editar_grupo/:id', component: GrupoEditComponent},
  { path: 'agenda', component: AgendasComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda-edit/:id', component: AgendaEditComponent, canActivate: [AutenticacaoService]},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

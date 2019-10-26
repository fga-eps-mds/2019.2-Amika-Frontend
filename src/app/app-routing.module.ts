import { AreaInformativaComponent } from './area-informativa/area-informativa.component';
import { AutenticacaoService } from './autenticacao.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgendasComponent } from './agendas/agendas.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'turmas', component: TurmasComponent, canActivate: [AutenticacaoService]  },
  { path: 'turmas_editar/:id', component: TurmaEditComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda', component: AgendasComponent, canActivate: [AutenticacaoService] },
  { path: 'agenda-edit/:id', component: AgendaEditComponent, canActivate: [AutenticacaoService]},
  { path: 'area-informativa', component: AreaInformativaComponent}
  { path: 'perfil_usuario', component : PerfilUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

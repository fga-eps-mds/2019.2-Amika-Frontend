import { HumorComponent } from './humor/humor.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { AgendaEditComponent } from './agendas/agenda-edit/agenda-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgendasComponent } from './agendas/agendas.component';
import { HumorComponent } from './humor/humor.component';


const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'turmas', component: TurmasComponent},
  {path: 'turmas_editar/:id', component: TurmaEditComponent},
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendasComponent },
  { path: 'agenda-edit/:id', component: AgendaEditComponent},
  { path: 'humor', component: HumorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupo-edit/grupo-edit.component';


const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'turmas', component: TurmasComponent},
  {path: 'turmas_editar/:id', component: TurmaEditComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'editar_grupo/:id', component: GrupoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

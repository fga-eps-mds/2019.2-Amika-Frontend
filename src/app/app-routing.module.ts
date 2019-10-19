import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormularioFelicidadeAutenticaComponent } from './formulario-felicidade-autentica/formulario-felicidade-autentica.component'
import { FormularioSatisfacaoComVidaComponent } from './formulario-satisfacao-com-vida/formulario-satisfacao-com-vida.component'

const routes: Routes = [
  {path: '',      component: HomepageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'turmas', component: TurmasComponent},
  {path: 'turmas_editar/:id', component: TurmaEditComponent},
  {path: 'formulario-felicidade', component: FormularioFelicidadeAutenticaComponent},
  {path: 'formulario-satisfacao', component: FormularioSatisfacaoComVidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

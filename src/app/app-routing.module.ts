import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import {ListaDeMatriculaComponent} from './lista-de-matricula/lista-de-matricula.component';


const routes: Routes = [
  { path: 'cadastrar', component: AlunoAutoRegistroComponent },
  { path: 'lista', component: ListaDeMatriculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

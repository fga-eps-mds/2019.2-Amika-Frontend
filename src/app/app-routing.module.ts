import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';


const routes: Routes = [
  { path: 'cadastrar', component: AlunoAutoRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

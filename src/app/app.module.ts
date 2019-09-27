import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import { ListaDeMatriculaComponent } from './lista-de-matricula/lista-de-matricula.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoAutoRegistroComponent,
    ListaDeMatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

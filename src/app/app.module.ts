import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoAutoRegistroComponent } from './aluno-auto-registro/aluno-auto-registro.component';
import { ListaDeMatriculaComponent } from './lista-de-matricula/lista-de-matricula.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlunoAutoRegistroComponent,
    ListaDeMatriculaComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaService } from './turmas/turma.service';
import { HttpClientModule } from '@angular/common/http';
import { TurmaEditComponent } from './turmas/turma-edit/turma-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TurmasComponent,
    TurmaEditComponent,
    LoginComponent,
    GruposComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],

  providers: [
    TurmaService,
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

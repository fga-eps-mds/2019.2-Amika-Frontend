import { AutenticacaoService } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormularioFelicidadeAutenticaComponent } from './formulario-felicidade-autentica/formulario-felicidade-autentica.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
 // { path: 'hero/:id',      component: HeroDetailComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioFelicidadeAutenticaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

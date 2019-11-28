import { FormularioService } from './../formulario.service';
import { AutenticacaoService } from './../autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private formularioService:FormularioService,
     public autenticacaoService:AutenticacaoService, private requisicaoService:RequisicaoService) {
    this.formularioLogin = this.formularioService.createFormLogin();
    this.formularioRegistro = this.formularioService.createFormRegistro();
  }

  logar(dadosUsuario) {
    console.log("O usuario foi logado. ", dadosUsuario);
    let dados = {"username" : dadosUsuario.matricula, "password": dadosUsuario.senha}
    console.log(dados)
    this.autenticacaoService.autenticar(dados);
    console.log(this.autenticacaoService.errors);
  }

  cadastrarAluno(dadosAluno) {
    console.log('Usuario cadastrado!');
    let dados = {"username" : dadosAluno.username, "first_name": dadosAluno.first_name, "last_name": dadosAluno.last_name, "password": dadosAluno.password}
    this.requisicaoService.realizarRequisicao(dados);
    this.requisicaoService.errors
  }

  ngOnInit() {
    console.log(localStorage.getItem('Authorization'));
    if(localStorage.getItem('Authorization')) {
      this.router.navigateByUrl('/');
    }
  }

}

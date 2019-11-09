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

  constructor(private formBuilder: FormBuilder, private router:Router,
     public autenticacaoService:AutenticacaoService, private requisicaoService:RequisicaoService) {
    this.formularioLogin = this.formBuilder.group({
      matricula: ['', Validators.required],
      senha: ['', Validators.required]
    });
    this.formularioRegistro = this.formBuilder.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required]
    });
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

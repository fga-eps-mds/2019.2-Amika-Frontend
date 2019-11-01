import { AutenticacaoService } from './../autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, public autenticacaoService:AutenticacaoService) {
    this.formularioLogin = this.formBuilder.group({
      matricula: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  logar(dadosUsuario) {
    console.log("O usuario foi logado. ", dadosUsuario);
    let dados = {"username" : dadosUsuario.matricula, "password": dadosUsuario.senha}
    console.log(dados)
    this.autenticacaoService.autenticar(dados);
    console.log(this.autenticacaoService.errors);
  }

  ngOnInit() {
    console.log(localStorage.getItem('Authorization'));
    if(localStorage.getItem('Authorization')) {
      this.router.navigateByUrl('/');
    }
  }

}

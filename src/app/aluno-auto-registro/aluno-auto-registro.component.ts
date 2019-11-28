import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { RequisicaoService } from '../requisicao.service';

@Component({  
  selector: 'app-aluno-auto-registro',
  templateUrl: './aluno-auto-registro.component.html',
  styleUrls: ['./aluno-auto-registro.component.css'],
})

export class AlunoAutoRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private requisicaoService:RequisicaoService, private formularioService:FormularioService) {
    this.formulario = this.formularioService.createFormRegistro();
  }
  
  cadastrarAluno(dadosAluno) {
    console.log('Usuario cadastrado!');
    let dados = {"username" : dadosAluno.username, "first_name": dadosAluno.first_name, "last_name": dadosAluno.last_name, "password": dadosAluno.password}
    this.requisicaoService.realizarRequisicao(dados);
    this.requisicaoService.errors
  }

  ngOnInit() {

  }

  voltar(){
    this.router.navigate(['/']);
  }

}

import { Matricula } from './../matriculas/shared/matricula';
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

  constructor(private formBuilder: FormBuilder, private router:Router, private requisicaoService:RequisicaoService) {
    this.formulario = this.formBuilder.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  cadastrarAluno(dadosAluno) {
    console.log('Usuario cadastrado!');
    let dados = {"matricula" : dadosAluno.matricula, "nome": dadosAluno.nome, "email": dadosAluno.email, "senha": dadosAluno.senha}
    console.log(dados)
    this.requisicaoService.realizarRequisicao(dados);
    console.log(this.requisicaoService.errors);
  }

  ngOnInit() {

  }

}

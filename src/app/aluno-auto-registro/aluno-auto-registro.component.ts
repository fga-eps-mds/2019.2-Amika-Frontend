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
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  cadastrarAluno(dadosAluno) {
    console.log('Usuario cadastrado!');
    let dados = {"username" : dadosAluno.username, "first_name": dadosAluno.first_name, "last_name": dadosAluno.last_name, "password": dadosAluno.password}
    console.log(dados)
    this.requisicaoService.realizarRequisicao(dados);
    console.log(this.requisicaoService.errors);
  }

  ngOnInit() {

  }

  voltar(){
    this.router.navigate(['/']);
  }

}

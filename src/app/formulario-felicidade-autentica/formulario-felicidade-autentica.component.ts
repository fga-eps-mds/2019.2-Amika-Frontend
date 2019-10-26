import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {Pontuacao} from './pontos'
import { FormularioFelidadeAutenticaService } from './formulario_felicidade_autentica.service';

@Component({
  selector: 'app-formulario-felicidade-autentica',
  templateUrl: './formulario-felicidade-autentica.component.html',
  styleUrls: ['./formulario-felicidade-autentica.component.css']
})
export class FormularioFelicidadeAutenticaComponent implements OnInit {

  formPontuacao: FormGroup;

  //constructor() { }

  constructor(private formBuilder: FormBuilder, private formularioFelidadeAutenticaService: FormularioFelidadeAutenticaService) { }

  ngOnInit() {
    this.createForm(new Pontuacao());
  }

  createForm(pontos: Pontuacao) {
    this.formPontuacao = this.formBuilder.group({
      ponto1: [pontos.ponto1],
      ponto2: [pontos.ponto2],
      ponto3: [pontos.ponto3],
      ponto4: [pontos.ponto4],
      ponto5: [pontos.ponto5],
      ponto6: [pontos.ponto6],
      ponto7: [pontos.ponto7],
      ponto8: [pontos.ponto8],
      ponto9: [pontos.ponto9],
      ponto10: [pontos.ponto10],
      ponto11: [pontos.ponto11],
      ponto12: [pontos.ponto12],
    })
  }

  fazerSoma(soma){
    let ponto = [];

    ponto[1] = {pontos: soma.ponto1};
    ponto[2] = {pontos: soma.ponto2};
    ponto[3] = {pontos: soma.ponto3};
    ponto[4] = {pontos: soma.ponto4};
    ponto[5] = {pontos: soma.ponto5};
    ponto[6] = {pontos: soma.ponto6};
    ponto[7] = {pontos: soma.ponto7};
    ponto[8] = {pontos: soma.ponto8};
    ponto[9] = {pontos: soma.ponto9};
    ponto[10] = {pontos: soma.ponto10};
    ponto[11] = {pontos: soma.ponto11};
    ponto[12] = {pontos: soma.ponto12};

    let total = ponto.reduce((total, valor) => total + valor.pontos, 0);

    console.log(total);

  }

    onSubmit(submicao){
      this.formularioFelidadeAutenticaService.enviar(submicao.total);
      console.log(submicao.total);
      this.formularioFelidadeAutenticaService.errors;
    }


  // ngOnInit() {
  // }

}

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
  total: number = null;

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

  fazerSoma(dadosFormulario){
    let ponto = [];

    ponto[1] = {pontos: dadosFormulario.ponto1};
    ponto[2] = {pontos: dadosFormulario.ponto2};
    ponto[3] = {pontos: dadosFormulario.ponto3};
    ponto[4] = {pontos: dadosFormulario.ponto4};
    ponto[5] = {pontos: dadosFormulario.ponto5};
    ponto[6] = {pontos: dadosFormulario.ponto6};
    ponto[7] = {pontos: dadosFormulario.ponto7};
    ponto[8] = {pontos: dadosFormulario.ponto8};
    ponto[9] = {pontos: dadosFormulario.ponto9};
    ponto[10] = {pontos: dadosFormulario.ponto10};
    ponto[11] = {pontos: dadosFormulario.ponto11};
    ponto[12] = {pontos: dadosFormulario.ponto12};

    this.total = ponto.reduce((total, valor) => total + valor.pontos, 0);

    console.log(this.total);

  }

    onSubmit(dadosFormulario){
      this.fazerSoma(dadosFormulario);
      let totalpontos = {"formulario": [{"tipo": "A", "pontuacao": this.total}]}
      this.formularioFelidadeAutenticaService.enviar(totalpontos);
      console.log(totalpontos);
      this.formularioFelidadeAutenticaService.errors;
    }


  // ngOnInit() {
  // }

}

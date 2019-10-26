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

  createForm(pontos: Pontuacao){
    this.formPontuacao = this.formBuilder.group({
      ponto1: [pontos.pontos],
      ponto2: [pontos.pontos],
      ponto3: [pontos.pontos],
      ponto4: [pontos.pontos],
      ponto5: [pontos.pontos],
      ponto6: [pontos.pontos],
      ponto7: [pontos.pontos],
      ponto8: [pontos.pontos],
      ponto9: [pontos.pontos],
      ponto10: [pontos.pontos],
      ponto11: [pontos.pontos],
      ponto12: [pontos.pontos],
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
    
    this.formularioFelidadeAutenticaService.enviar(total);
    this.formularioFelidadeAutenticaService.errors;
  }
  

  // ngOnInit() {
  // }

}

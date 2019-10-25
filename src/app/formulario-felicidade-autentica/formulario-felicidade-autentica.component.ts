import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {Pontuacao} from './pontos'

@Component({
  selector: 'app-formulario-felicidade-autentica',
  templateUrl: './formulario-felicidade-autentica.component.html',
  styleUrls: ['./formulario-felicidade-autentica.component.css']
})
export class FormularioFelicidadeAutenticaComponent implements OnInit {
  
  formPontuacao: FormGroup;
  //constructor() { }

  constructor(private formBuilder: FormBuilder) { }
 
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
      totalpontos: [pontos.pontos]
    })
  }
  

  // ngOnInit() {
  // }

}

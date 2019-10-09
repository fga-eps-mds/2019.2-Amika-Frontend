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
      totalpontos: [pontos.pontos]
    })
  }

  // ngOnInit() {
  // }

}

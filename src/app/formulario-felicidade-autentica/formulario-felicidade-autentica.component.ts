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

  constructor() { }

  createForm(pontos: Pontuacao){
    this.formPontuacao = new FormGroup{
      totalpontos: new FormControl(pontos.pontos)
    }
  }

  ngOnInit() {
  }

}

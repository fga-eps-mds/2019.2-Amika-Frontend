import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pontuacao} from './pontos'
import { FormularioSatisfacaoComVidaService } from './formulario-satisfacao-com-vida.service';

@Component({
  selector: 'app-formulario-satisfacao-com-vida',
  templateUrl: './formulario-satisfacao-com-vida.component.html',
  styleUrls: ['./formulario-satisfacao-com-vida.component.css']
})
export class FormularioSatisfacaoComVidaComponent implements OnInit {

  formPontuacao: FormGroup;
  total: number = null;

  //constructor() { }

  constructor(private formBuilder: FormBuilder, private formularioSatisfacaoComVidaService: FormularioSatisfacaoComVidaService) { }

  ngOnInit() {
    this.createForm(new Pontuacao());
  }

  createForm(pontos: Pontuacao) {
    this.formPontuacao = this.formBuilder.group({
      ponto1: [pontos.ponto1, Validators.required],
      ponto2: [pontos.ponto2, Validators.required],
      ponto3: [pontos.ponto3, Validators.required],
      ponto4: [pontos.ponto4, Validators.required],
      ponto5: [pontos.ponto5, Validators.required],
    })
  }

  fazerSoma(dadosFormulario){
    let ponto = [];

    ponto[1] = {pontos: dadosFormulario.ponto1};
    ponto[2] = {pontos: dadosFormulario.ponto2};
    ponto[3] = {pontos: dadosFormulario.ponto3};
    ponto[4] = {pontos: dadosFormulario.ponto4};
    ponto[5] = {pontos: dadosFormulario.ponto5};

    this.total = ponto.reduce((total, valor) => total + valor.pontos, 0);
    this.total = this.total/5;
    this.total = Number(this.total);
    console.log(this.total);

  }

    onSubmit(dadosFormulario){
      this.fazerSoma(dadosFormulario);
      let totalpontos = {"formulario": [{"tipo": "B", "pontuacao": this.total}]}
      this.formularioSatisfacaoComVidaService.enviar(totalpontos);
      console.log(totalpontos);
      this.formularioSatisfacaoComVidaService.errors;
    }
}

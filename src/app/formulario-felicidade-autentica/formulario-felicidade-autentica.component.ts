import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pontuacao} from './pontos'
import { FormularioFelidadeAutenticaService } from './formulario_felicidade_autentica.service';

@Component({
  selector: 'app-formulario-felicidade-autentica',
  templateUrl: './formulario-felicidade-autentica.component.html',
  styleUrls: ['./formulario-felicidade-autentica.component.css']
})
export class FormularioFelicidadeAutenticaComponent implements OnInit {
  errors;
  formPontuacao: FormGroup;
  total: number = null;

  //constructor() { }

  constructor(private formBuilder: FormBuilder, private formularioFelidadeAutenticaService: FormularioFelidadeAutenticaService) { }

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
      ponto6: [pontos.ponto6, Validators.required],
      ponto7: [pontos.ponto7, Validators.required],
      ponto8: [pontos.ponto8, Validators.required],
      ponto9: [pontos.ponto9, Validators.required],
      ponto10: [pontos.ponto10, Validators.required],
      ponto11: [pontos.ponto11, Validators.required],
      ponto12: [pontos.ponto12, Validators.required],
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
    this.total = this.total/12;
    this.total = Number(this.total);
    console.log(this.total);

  }

    onSubmit(dadosFormulario){
      this.fazerSoma(dadosFormulario);
      
      let totalpontos = {"formulario": [{"tipo": "A", "pontuacao": this.total}]}
      this.formularioFelidadeAutenticaService.enviar(JSON.stringify(totalpontos)).subscribe(data => { 
        console.log(data);
      }, 
        error => {
          console.log(error);
          this.errors = error;
        });
      console.log(totalpontos);
      }


  // ngOnInit() {
  // }

}

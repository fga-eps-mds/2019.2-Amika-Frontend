import { Matricula } from './../matriculas/shared/matricula';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-aluno-auto-registro',
  templateUrl: './aluno-auto-registro.component.html',
  styleUrls: ['./aluno-auto-registro.component.css'],
})
export class AlunoAutoRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  // Esse evento é disparado sempre que o componente é inicializado
  ngOnInit() {
    /*this.formulario = new FormGroup({
      matricula: new FormControl(null),
      nome: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null)
    });*/

    this.createForm(new Matricula());
  }

  OnSubmit() {
    console.log(this.formulario);
    this.formulario.reset(new Matricula());
  }

  createForm(matricula: Matricula) {
    this.formulario = new FormGroup({
      matricula: new FormControl(matricula.matricula),
      nome: new FormControl(matricula.nome),
      email: new FormControl(matricula.email),
      senha: new FormControl(matricula.senha)
    });
  }

}

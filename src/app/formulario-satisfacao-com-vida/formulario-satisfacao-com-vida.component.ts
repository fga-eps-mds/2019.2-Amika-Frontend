import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pontuacao} from './pontos'
import { FormularioSatisfacaoComVidaService } from './formulario-satisfacao-com-vida.service';
import { empty } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-satisfacao-com-vida',
  templateUrl: './formulario-satisfacao-com-vida.component.html',
  styleUrls: ['./formulario-satisfacao-com-vida.component.css']
})
export class FormularioSatisfacaoComVidaComponent implements OnInit {

  formPontuacao: FormGroup;
  total: number = null;
  errors;
  formRegistrado: boolean = false;
  dadosForm;

  //constructor() { }

  constructor(private formBuilder: FormBuilder, private formService: FormularioSatisfacaoComVidaService,
              public dialog: MatDialog) {
    this.formService.verificaForm().subscribe(data => {
      console.log(data);
      this.dadosForm = data;
    },
    error => {
      console.log(error);
      this.errors = error;
    });
  }

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
    });
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
      this.validaEnvio(this.dadosForm);
      if (this.formRegistrado === false) {
        this.fazerSoma(dadosFormulario);
        let totalpontos = {"formulario": [{"tipo": "B", "pontuacao": this.total}]};
        this.formService.enviar(totalpontos);
        this.formService.errors;
        console.log(totalpontos);
      } else {
        this.openDialog();
      }
    }

    validaEnvio(formulario){
      console.log(formulario.formulario[0]);
      if (formulario.formulario[0] === undefined) {
        console.log("Nao tem conteúdo");
        this.formRegistrado = false;
      } else {
        console.log("Tem conteúdo");
        this.formRegistrado = true;
      }
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(FormularioSatisfacaoComVidaDialog, {
        width: '250px'
      });
    }
}

@Component({
  selector: 'formulario-satisfacao-com-vida-dialog',
  templateUrl: 'formulario-satisfacao-com-vida-dialog.html',
  styleUrls: ['formulario-satisfacao-com-vida-dialog.css']
})
export class FormularioSatisfacaoComVidaDialog {
  constructor(
    public dialogRef: MatDialogRef<FormularioSatisfacaoComVidaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClose(): void {
    this.dialogRef.close();
  }

}

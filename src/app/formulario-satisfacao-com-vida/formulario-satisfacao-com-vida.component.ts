import { Router } from '@angular/router';
import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pontuacao} from './pontos'
import { FormularioSatisfacaoComVidaService } from './formulario-satisfacao-com-vida.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  nota: number;
  total: number;
}

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
  qtdForms;

  constructor(private formBuilder: FormBuilder, private formService: FormularioSatisfacaoComVidaService,
    public dialog: MatDialog, private router: Router) {
      this.formService.verificaForm().subscribe(data => {
        console.log(data);
        this.dadosForm = data;
        this.qtdForms = this.dadosForm.formulario.length;
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
    console.log("Pontos: " + this.total);
    this.total = Number(this.total);
    console.log(this.total);

  }

    onSubmit(dadosFormulario){
      this.validaEnvio(this.dadosForm, this.qtdForms);
      if (this.formRegistrado === false) {
        this.fazerSoma(dadosFormulario);
        let totalpontos = {"formulario": [{"tipo": "B", "pontuacao": this.total}]};
        this.formService.enviar(totalpontos);
        this.formService.errors;
        console.log(totalpontos);
        this.envioDialog();
      } else {
        this.openDialog();
      }
    }

    validaEnvio(formulario, qtd){
      console.log(formulario.formulario[0]);
      if (formulario.formulario[0] === undefined) {
        console.log("Nao tem conteúdo");
        this.formRegistrado = false;
      } else if (qtd > 1 && (formulario.formulario[0].tipo == "B" || formulario.formulario[1].tipo == "B")) {
        console.log("Tem conteúdo");
        this.formRegistrado = true;
      } else if (qtd == 1 && formulario.formulario[0].tipo == "B") {
        this.formRegistrado = true;
      } else {
        this.formRegistrado = false;
      }
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(FormularioSatisfacaoComVidaDialog, {
        width: '250px'
      });
    }

    envioDialog(): void {
      const dialogRef = this.dialog.open(FormularioEnviadoDialog, {
        width: '250px',
        data : {nota: this.total, total: 35}
      });
    }
}

@Component({
  selector: 'formulario-satisfacao-com-vida-dialog',
  templateUrl: 'formulario-satisfacao-com-vida-dialog.html',
  styleUrls: ['formulario-satisfacao-com-vida-dialog.css']
})
export class FormularioSatisfacaoComVidaDialog {
  constructor( public dialogRef: MatDialogRef<FormularioSatisfacaoComVidaDialog>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'formulario-enviado-dialog',
  templateUrl: 'formulario-enviado-dialog.html',
  styleUrls: ['formulario-satisfacao-com-vida-dialog.css']
})
export class FormularioEnviadoDialog {
  constructor(
    public dialogRef: MatDialogRef<FormularioEnviadoDialog>, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClose(): void {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

}

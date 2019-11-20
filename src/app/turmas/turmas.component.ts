import { Turma } from './turmas.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TurmaService } from './turma.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface CriarTurmasDialogoData {
  formularioTurma: FormGroup;
}

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: Array<Turma>;
  error: any;
  formularioTurma: FormGroup;
  submitted = false;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;
  turmaSelecionada: Turma;

  constructor(public turmaService: TurmaService, public formBuilder: FormBuilder,
              public router: Router, public route: ActivatedRoute, public modalService: BsModalService,
              public dialog: MatDialog) {
    this.formularioTurma = this.formBuilder.group({
      descricao: ['', Validators.required],
      id: ['']
    });
  }

  ngOnInit() {
    this.getter();
  }

  criarDialogoAdicionarTurma(): void {
    let dialogRef = this.dialog.open(CriarTurmasDialogo, {
      width: '250px',
      data: {formularioTurma: null, title: "Adicionar turma"}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.formularioTurma.patchValue(JSON.parse(data));
      this.onSubmit();
    });
  }

  criarDialogoEditarTurma(turma): void {
    const dialogRef = this.dialog.open(CriarTurmasDialogo, {
      width: '250px',
      data: {formularioTurma: turma, title: "Editar turma"}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.formularioTurma.patchValue(JSON.parse(data));
      this.edit();
    });
  }

  edit() {
    this.turmaService.edit_turmas(this.formularioTurma.value.id, this.formularioTurma.value).subscribe((data: any) => {
      this.turmas[this.turmas.findIndex(item => item.id === this.formularioTurma.value.id)] = this.formularioTurma.value;
    }, (error: any) => {
      this.error = error;
      console.log("ERRORZÃO");
      console.log(error.error);
      alert(error.error.descricao);
    });
  }

  getter() {
    this.turmaService.get_turmas().subscribe((data: any) => {
      this.turmas = data;
    }, (error: any) => {
      this.error = error;
    });
    this.submitted = false;
  }

  hasError(field: string) {
    return this.formularioTurma.get(field).errors;
  }

  onDelete(turma) {
    this.turmaSelecionada = turma;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.turmaService.delete_turmas(this.turmaSelecionada.id).subscribe((data: any) => {
      this.getter();
    }, (error: any) => {
      this.error = error;
    });
    this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  onSubmit() {
    this.submitted = true;
    this.turmaService.create_turmas(this.formularioTurma.value).subscribe((data: any) => {
      this.formularioTurma.reset();
      this.getter();
    }, (error: any) => {
      this.error = error;
    });
  }

  onEdit(id) {
    this.router.navigate(['turmas_editar', id]);
  }

  mostrarGrafico(id) {
    this.router.navigate(['grafico', id]);
  }
}

@Component({
  selector: 'turmas-create-dialogo',
  templateUrl: 'turmas-create-dialogo.html',
  styleUrls: ['./turmas-create-dialogo.css']
})
export class CriarTurmasDialogo {
  formularioTurma: FormGroup;
  constructor( public dialogRef: MatDialogRef<CriarTurmasDialogo>, public formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ) {
    if (this.data.formularioTurma) {
      this.formularioTurma = this.formBuilder.group({
        descricao: ['', Validators.required],
        id: ""
      });
      this.formularioTurma.patchValue(this.data.formularioTurma);
    }
    else {
      this.formularioTurma = this.formBuilder.group({
        descricao: ['', Validators.required]
      });
    }
  }

  submit(form) {
    this.dialogRef.close(`${JSON.stringify(form.value)}`);
  }
}


import { Agenda } from './agendas.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AgendaService } from './agenda.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit {
  agendas: Array<Agenda>;
  formularioAgenda: FormGroup;
  error: any={isError:false,errorMessage:''};
  submitted = false;
  agendaSelecionada: Agenda;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private modalService: BsModalService,
    public dialog: MatDialog) {
    this.getter();
    this.formularioAgenda = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
      data_disponibilizacao: ['', Validators.required],
      data_encerramento: ['', Validators.required],
      id: ['']
    });
  }

  ngOnInit() {
  }

  getter() {
    this.agendaService.get_agendas().subscribe((data: any) => {
      this.agendas = data;
    }, (error: any) => {
      this.error = error;
    });
    this.submitted = false;
  }
  hasError(field: string) {
    return this.formularioAgenda.get(field).errors;
  }

  onDelete(agenda) {
    this.agendaSelecionada = agenda;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
     this.agendaService.delete_agenda(this.agendaSelecionada.id).subscribe((data: any) => {
      this.getter();
    }, (error: any) => {
      this.error = error;
    });
     this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  validarData(){
    if (this.formularioAgenda.value.data_disponibilizacao && this.formularioAgenda.value.data_encerramento){
      if (new Date(this.formularioAgenda.value.data_disponibilizacao) < new Date(this.formularioAgenda.value.data_encerramento)){
        this.error={isError:false,errorMessage:''};
      } else {
        this.error = {isError:true,errorMessage:"Data de encerramento deve ser maior do que a de disponibilização"};
      }
    }
    else {
      this.error={isError:false,errorMessage:''};
    }
  }

  onSubmit() {
    this.submitted = true;
    this.validarData();
    if (this.formularioAgenda.valid) {
      this.agendaService.create_agenda(this.formularioAgenda.value).subscribe((data: any) => {
        this.formularioAgenda.reset();
        this.getter();
      }, (error: any) => {
        this.error = error;
      });
    }
  }

  onEdit(id) {
    this.router.navigate(['agenda-edit', id]);
  }

  criarDialogoAdicionarAgenda(): void {
    const dialogRef = this.dialog.open(CriarAgendasDialogo, {
      width: '250px',
      data: {formularioAgenda: null, title: "Adicionar Agenda"}
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("DATA");
      console.log(JSON.parse(data));
      this.formularioAgenda.patchValue(JSON.parse(data));
      this.onSubmit();
    });
  }

  criarDialogoEditarAgenda(Agenda): void {
    const dialogRef = this.dialog.open(CriarAgendasDialogo, {
      width: '250px',
      data: {formularioAgenda: Agenda, title: "Editar Agenda"}
    });
    dialogRef.afterClosed().subscribe(data => {
      data = JSON.parse(data)
      console.log(data);
      this.formularioAgenda.patchValue(data);
      console.log(this.formularioAgenda.value);
      this.edit();
    });
  }

  edit() {
    this.agendaService.edit_agenda(this.formularioAgenda.value.id, this.formularioAgenda.value).subscribe((data: any) => {
      this.agendas[this.agendas.findIndex(item => item.id === this.formularioAgenda.value.id)] = this.formularioAgenda.value;
    }, (error: any) => {
      console.log("ERRO MAROTÃO")
      console.log(this.formularioAgenda.value.id)
      this.error = error;
    });
  }
}

@Component({
  selector: 'agendas-create-dialogo',
  templateUrl: 'agendas-create-dialogo.html',
  styleUrls: ['./agendas-create-dialogo.css']
})
export class CriarAgendasDialogo {
  formularioAgenda: FormGroup;
  submitted = false;
  error: any={isError:false,errorMessage:''};

  constructor(private agendaService: AgendaService, public dialogRef: MatDialogRef<CriarAgendasDialogo>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ) {
    if (this.data.formularioAgenda) {
    this.formularioAgenda = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
      data_disponibilizacao: ['', Validators.required],
      data_encerramento: ['', Validators.required],
      id: ['']
      });
      this.formularioAgenda.patchValue(this.data.formularioAgenda);
    }
    else {
      this.formularioAgenda = this.formBuilder.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        tipo: ['', Validators.required],
        data_disponibilizacao: ['', Validators.required],
        data_encerramento: ['', Validators.required],
        id: ['']
      });
    }
  }

  onClick(): void {
  }

  submit(form) {
    this.submitted = true;
    this.validarData();
    if (this.formularioAgenda.valid) {
      this.dialogRef.close(`${JSON.stringify(form.value)}`);
    }
  }

  validarData(){
    if (this.formularioAgenda.value.data_disponibilizacao && this.formularioAgenda.value.data_encerramento){
      if (new Date(this.formularioAgenda.value.data_disponibilizacao) < new Date(this.formularioAgenda.value.data_encerramento)){
        this.error={isError:false,errorMessage:''};
      } else {
        this.error = {isError:true,errorMessage:"Data de encerramento deve ser maior do que a de disponibilização"};
      }
    }
    else {
      this.error={isError:false,errorMessage:''};
    }
  }

  hasError(field: string) {
    return this.formularioAgenda.get(field).errors;
  }
}



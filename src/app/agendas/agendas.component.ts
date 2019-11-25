import { FormularioService } from './../formulario.service';
import { Agenda } from './agendas.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AgendaService } from './agenda.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

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

  constructor(public agendaService: AgendaService, private formBuilder: FormBuilder,
    private router: Router, private modalService: BsModalService,
    public dialog: MatDialog, private formularioService: FormularioService) {
    this.getter();
    this.formularioAgenda = this.formularioService.createFormAgenda();
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
      Swal.fire({
        icon: 'success',
        title: 'A agenda foi removida com sucesso!',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      });
    }, (error: any) => {
      this.error = error;
      Swal.fire({
        icon: 'error',
        title: 'Não é possível remover esta agenda',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      });
    });
     this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  onSubmit() {
    this.submitted = true;
    this.error = this.agendaService.validarData(this.formularioAgenda.value.data_disponibilizacao, this.formularioAgenda.value.data_encerramento);
    if (this.formularioAgenda.valid) {
      this.agendaService.create_agenda(this.formularioAgenda.value).subscribe((data: any) => {
        this.formularioAgenda.reset();
        this.getter();
        Swal.fire({
          icon: 'success',
          title: 'A agenda foi adicionada com sucesso!',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'botao',
          }
        });
      }, (error: any) => {
        this.error = error;
        Swal.fire({
          icon: 'error',
          title: 'Os campos não foram preenchidos corretamente!',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'botao',
          }
        });
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
      this.formularioAgenda.patchValue(JSON.parse(data));
      this.onSubmit();
      Swal.fire({
        icon: 'success',
        title: 'A agenda foi adicionada com sucesso!',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      });
    });
  }

  criarDialogoEditarAgenda(Agenda): void {
    const dialogRef = this.dialog.open(CriarAgendasDialogo, {
      width: '250px',
      data: {formularioAgenda: Agenda, title: "Editar Agenda"}
    });
    dialogRef.afterClosed().subscribe(data => {
      data = JSON.parse(data)
      this.formularioAgenda.patchValue(data);
      this.edit();
    });
  }

  edit() {
    this.agendaService.edit_agenda(this.formularioAgenda.value.id, this.formularioAgenda.value).subscribe((data: any) => {
      this.agendas[this.agendas.findIndex(item => item.id === this.formularioAgenda.value.id)] = this.formularioAgenda.value;
      Swal.fire({
        icon: 'success',
        title: 'A agenda foi editada com sucesso!',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      });
    }, (error: any) => {
      this.error = error;
      Swal.fire({
        icon: 'error',
        title: 'Ops, não é possível editar esta agenda.',
        text: 'Verifique se todos os campos foram preenchidos corretamente.',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'botao',
        }
      });
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
  agendasComponent: AgendasComponent;

  constructor(public agendaService: AgendaService, private formularioService: FormularioService, public dialogRef: MatDialogRef<CriarAgendasDialogo>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.formularioAgenda = this.formularioService.createFormAgenda();
    if (this.data.formularioAgenda) {agendaService
      this.formularioAgenda.patchValue(this.data.formularioAgenda);
    }
  }

  onClick(): void {
  }

  submit(form) {
    this.submitted = true;
    this.error = this.agendaService.validarData(this.formularioAgenda.value.data_disponibilizacao, this.formularioAgenda.value.data_encerramento);
    if (this.formularioAgenda.valid) {
      this.dialogRef.close(`${JSON.stringify(form.value)}`);
    }
  }

  hasError(field: string) {
    return this.formularioAgenda.get(field).errors;
  }
}



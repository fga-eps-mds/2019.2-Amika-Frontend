import { Agenda } from './agendas.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit {
  agendas: Agenda;
  formularioAgenda: FormGroup;
  error: any;
  submitted = false;
  agendaSelecionada: Agenda;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private modalService: BsModalService) {
    this.getter();
    this.formularioAgenda = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getter() {
    this.agendaService.get_agendas().subscribe((data: any) => {
      console.log(data);
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
      console.log(data);
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
    console.log(this.formularioAgenda.value);
    this.submitted = true;

    if (this.formularioAgenda.valid) {
      console.log('Enviar');
      this.agendaService.create_agenda(this.formularioAgenda.value).subscribe((data: any) => {
        console.log(data);
        this.formularioAgenda.reset();
        this.getter();

      }, (error: any) => {
        this.error = error;
      });
    }
  }

  onEdit(id) {
    this.router.navigate(['agendas-edit/:id', id]);
  }
}


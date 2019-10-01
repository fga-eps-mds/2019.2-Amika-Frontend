import { Turma } from './turmas.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TurmaService } from './turma.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: Turma;
  error: any;
  formularioTurma: FormGroup;
  submitted = false;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;
  turmaSelecionada: Turma;

  constructor(private turmaService: TurmaService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute, private modalService: BsModalService) {
    this.getter();
    this.formularioTurma = this.formBuilder.group({
      nome_turma: ['', Validators.required],
      periodo_turma: ['', Validators.required],
      ano_turma: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getter() {
    this.turmaService.get_turmas().subscribe((data: any) => {
      console.log(data);

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
    console.log(this.formularioTurma.value);
    this.submitted = true;

    if (this.formularioTurma.valid) {
      console.log('Enviar');
      this.turmaService.create_turmas(this.formularioTurma.value).subscribe((data: any) => {
        console.log(data);
        this.formularioTurma.reset();
        this.getter();

      }, (error: any) => {
        this.error = error;
      });
    }
  }

  onEdit(id) {
    this.router.navigate(['turmas_editar', id]);

  }
}

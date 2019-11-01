import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GrupoService } from './grupo.service';
import { Grupo } from './grupos.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: Grupo;
  error: any;
  formularioGrupo: FormGroup;
  submitted = false;
  alunos: any;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;
  grupoSelecionado: Grupo;

  constructor(private grupoService: GrupoService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute, private modalService: BsModalService) {
    this.getter();
    this.formularioGrupo = this.formBuilder.group({
      nome : ['', Validators.required]
    });
    }

  ngOnInit() {
  }

  getter() {
    this.grupoService.get_grupos().subscribe((data: any) => {
      console.log(data);
      this.grupos = data;
    }, (error: any) => {
      this.error = error;
    });
    this.grupoService.get_alunos().subscribe((data: any) => {
      console.log(data);
      this.alunos = data;
    }, (error: any) => {
      this.error = error;
    });
    this.submitted = false;
  }

hasError(field: string) {
  return this.formularioGrupo.get(field).errors;
}

onDelete(grupo) {
  this.grupoSelecionado = grupo;
  this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
}

onConfirmDelete() {
   this.grupoService.delete_grupos(this.grupoSelecionado.id).subscribe((data: any) => {
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
  console.log(this.formularioGrupo.value);
  this.submitted = true;

  if (this.formularioGrupo.valid) {
    console.log('Enviar');
    this.grupoService.create_grupos(this.formularioGrupo.value).subscribe((data: any) => {
      console.log(data);
      this.formularioGrupo.reset();
      this.getter();

    }, (error: any) => {
      this.error = error;
    });
  }
}

onEdit(id) {
  this.router.navigate(['editar_grupo/:id', id]);

}

popula() {
  this.grupoService.popula_grupo().subscribe((data: any) => {
    console.log(data);
    this.getter();
  }, (error: any) => {
    this.error = error;
  });
}
}

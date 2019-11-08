import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GrupoService } from './grupo.service';
import { Grupo } from './grupos.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
              private router: Router, private route: ActivatedRoute, private modalService: BsModalService,
              public dialog: MatDialog) {
    this.getter();
    this.formularioGrupo = this.formBuilder.group({
      nome : ['', Validators.required]
    });
    }

  ngOnInit() {
  }

  criarDialogoAdicionarGrupo(): void {
    const dialogRef = this.dialog.open(CriarGruposDialogo, {
      width: '250px',
      data: {formularioGrupo: null, title: "Adicionar grupo"}
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("DATA");
      console.log(JSON.parse(data));
      this.formularioGrupo.patchValue(JSON.parse(data));
      this.onSubmit();
    });
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

@Component({
  selector: 'grupos-create-dialogo',
  templateUrl: 'grupos-create-dialogo.html',
  styleUrls: ['./grupos-create-dialogo.css']
})
export class CriarGruposDialogo {
  formularioGrupo: FormGroup;
  constructor( public dialogRef: MatDialogRef<CriarGruposDialogo>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ) {
    if (this.data.formularioGrupo) {
      this.formularioGrupo = this.formBuilder.group({
        nome: ['', Validators.required],
        id: ""
      });
      this.formularioGrupo.patchValue(this.data.formularioGrupo);
    }
    else {
      this.formularioGrupo = this.formBuilder.group({
        nome: ['', Validators.required]
      });
    }
  }

  onClick(): void {
  }

  submit(form) {
    this.dialogRef.close(`${JSON.stringify(form.value)}`);
  }
}


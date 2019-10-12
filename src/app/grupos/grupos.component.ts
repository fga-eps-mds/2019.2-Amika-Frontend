import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GrupoService } from '../grupo.service';
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
    this.submitted = false;
  }
}

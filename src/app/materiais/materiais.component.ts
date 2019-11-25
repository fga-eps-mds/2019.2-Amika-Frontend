import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MateriaisService } from './materiais.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.css']
})


export class MateriaisComponent implements OnInit {

  uploadForm: FormGroup;
  anexo;
  error: any = {isError: false, errorMessage: ''};
  materiais;
  nome: string;
  materialSelecionado;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private materiaisService: MateriaisService, private modalService: BsModalService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.getter();
    this.uploadForm = this.formBuilder.group({
      arquivo: ['']
    });
  }

  ngOnInit() {
  }


  onChange(event){
    if (event.target.files.length > 0){
      const file =  event.target.files[0];
      this.nome = "selecionado: " + file.name;
      this.anexo = file;
      this.uploadForm.controls['arquivo'].setValue(file);
      console.log(this.uploadForm);
    }
  }

  onSubmit(){
    const formData = new FormData();

    if (this.uploadForm.get('arquivo').value === null || this.uploadForm.get('arquivo').value === "") {
      console.log("Não há arquivos para enviar");
      this.uploadForm.controls['arquivo'].setValue(null);
    } else {
      formData.append('arquivo', this.uploadForm.get('arquivo').value);
    }

    if (this.uploadForm.valid) {
      this.materiaisService.create_materiais(formData).subscribe(
        (data: any) => {
          this.uploadForm.reset();
          this.getter();
          this.nome = "";
        },
        (error: any) => {
          this.error = error;
          console.log(error);
        }
        )
      }
  }

  abreArquivo(caminho){
    this.materiaisService.get_material(caminho).subscribe(blob => {
      importedSaveAs(blob, caminho);
    });
  }


  onDelete(material){
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    this.materialSelecionado = material;
  }

  onConfirmDelete() {
    this.materiaisService.delete_materiais(this.materialSelecionado).subscribe((data: any) => {
      this.getter();
    });
    this.deleteModalRef.hide();
 }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  getter() {
    this.materiaisService.get_materiais().subscribe((data: any) => {
      this.materiais = data;
      console.log(this.materiais);
    }, (error: any) => {
      this.error = error;
    });
    console.log(this.materiais)
  }
}

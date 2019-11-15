import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MateriaisService } from './materiais.service';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.css']
})
export class MateriaisComponent implements OnInit {

  SERVER_URL = "http://localhost:4200/upload"
  uploadForm: FormGroup;
  anexo;
  error: any = {isError: false, errorMessage: ''};

  constructor(private materiaisService: MateriaisService, private formBuilder: FormBuilder, private httpClient: HttpClient) {

    this.uploadForm = this.formBuilder.group({
      arquivo: ['']
    });

  }

  ngOnInit() {
  }


  onChange(event){
    if (event.target.files.length > 0){
      const file =  event.target.files[0];
      this.anexo = file;

      this.uploadForm.controls['arquivo'].setValue(file);
      console.log(this.uploadForm)
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
        },
        (error: any) => {
          this.error = error;
          console.log(error);
        }
        )
      }

  }

  // onSubmit() {
  //   // console.log(this.uploadForm.value);
  //   const formData = new FormData();
  //   formData.append('material', this.uploadForm.get('arquivo').value);

  //   console.log(formData);
  //   this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  // }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import {CSVRecord} from './CSVModel';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaService } from './../lista.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-de-matricula',
  templateUrl: './lista-de-matricula.component.html',
  styleUrls: ['./lista-de-matricula.component.css']
})

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
})

export class ListaDeMatriculaComponent implements OnInit {
  title = 'Leitor CSV';  
  
  public records: any[] = [];  
  @ViewChild('csvReader', {static: false}) csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  } 
  
  constructor(private router:Router, private listaService:ListaService) {}
  
  registrar(informacao){
    console.log("Lista enviada ", informacao);
    // let dados = {"matricula" : informacao.matricula, "turma": informacao.turma}
    console.log(JSON.stringify(informacao));
    this.listaService.enviar(JSON.stringify(informacao));
    console.log(this.listaService.errors);
  }

  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();    
        csvRecord.matricula = curruntRecord[0].trim();  
        csvRecord.turma = curruntRecord[1].trim();
        csvArr.push({
          "matricula": curruntRecord[0].trim(),
          "turma": curruntRecord[1].trim()
        });  
      }  
    }  
    this.registrar(csvArr)
    console.log(csvArr)
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }

  //constructor() { }

  ngOnInit() {
  }

}

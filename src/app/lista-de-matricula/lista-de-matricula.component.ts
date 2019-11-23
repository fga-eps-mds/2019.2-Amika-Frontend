import { Component, OnInit, ViewChild } from '@angular/core';
import {CSVRecord} from './CSVModel';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaService } from './../lista.service';
import { Router } from '@angular/router';
import { RequisicaoService } from '../requisicao.service';
import { Turma } from '../turmas/turmas.model';
import { TurmaService } from '../turmas/turma.service';

@Component({
  selector: 'app-lista-de-matricula',
  templateUrl: './lista-de-matricula.component.html',
  styleUrls: ['./lista-de-matricula.component.css']
})

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
  ],
})

export class ListaDeMatriculaComponent implements OnInit {
  title = 'Leitor CSV';
  formulario: FormGroup;
  formularioLista: FormGroup;
  arrayTeste = [];
  formIndividualEnviado = false;
  formListaEnviado = false;
  turmas: Turma;
  error: any;
  submitted: any;
  public records: any[] = [];
  @ViewChild('csvReader', {static: false}) csvReader: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private requisicaoService: RequisicaoService,
              private listaService: ListaService, private turmaService: TurmaService) {
    this.getter();
    this.formulario = this.formBuilder.group({
      matricula: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      turma: ['', Validators.required],
    }),
    this.formularioLista = this.formBuilder.group({
      arquivo: ['', Validators.required],
      turma: ['', Validators.required],
    });
  }

  onSubmit(dadosFormulario) {
    this.formIndividualEnviado = true;

    if (this.formulario.valid) {
        this.cadastroIndividual(dadosFormulario);
        this.formulario.reset();
        this.formIndividualEnviado = false;
    }
  }

  cadastroIndividual(dadosIndividuais) {
    const dados = [{'matricula': dadosIndividuais.matricula, 'turma': dadosIndividuais.turma}];
    this.requisicaoService.requisicaoMatriculaIndividual(dados);
    this.requisicaoService.errors;
  }

  hasError(field: string) {
    return this.formulario.get(field).errors;
  }

  onSubmitLista(dadosFormulario) {
    this.formListaEnviado = true;
    if (this.formularioLista.valid) {
      this.registrar(this.arrayTeste);
      this.formularioLista.reset();
      this.formListaEnviado = false;
    }
  }

  uploadListener($event: any): void {
    const files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = ( csvData as string).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function() {
        console.log('Ocorreu um erro ao ler o arquivo!');
      };

    } else {
      alert('Por favor mande um arquivo CSV válido.');
      this.fileReset();
    }
  }

  registrar(informacao) {
    console.log('Lista enviada', informacao);
    console.log(JSON.stringify(informacao));
    this.listaService.enviar(JSON.stringify(informacao));
    console.log(this.listaService.errors);
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    const csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = ( csvRecordsArray[i] as string).split(',');
      if (curruntRecord.length == headerLength) {
        const csvRecord: CSVRecord = new CSVRecord();
        csvRecord.matricula = curruntRecord[0].trim();
        csvRecord.turma = curruntRecord[1].trim();
        csvArr.push({
          'matricula': curruntRecord[0].trim(),
          'turma': curruntRecord[1].trim()
        });
      }
    }
    this.arrayTeste = csvArr;
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = ( csvRecordsArr[0] as string).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  hasErrorLista(field: string) {
    return this.formularioLista.get(field).errors;
  }

  getter() {
    this.turmaService.get_turmas().subscribe((data: any) => {
      console.log(data);
      this.turmas = data;
    }, (error: any) => {
      this.error = error;
    });
  }

  ngOnInit() {}

}

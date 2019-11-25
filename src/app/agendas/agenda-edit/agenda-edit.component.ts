import { FormularioService } from './../../formulario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Agenda } from '../agendas.model';
import { AgendasComponent } from '../agendas.component';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.css']
})

export class AgendaEditComponent implements OnInit {
  agendas: Agenda;
  error:any={isError:false,errorMessage:''};
  formularioAgenda: FormGroup;
  submitted = false;
  agendaComponent: AgendasComponent;

  constructor(public agendaService: AgendaService, private formularioService: FormularioService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const agenda$ = this.agendaService.get_agenda(id)
        agenda$.subscribe(agenda => {
          this.updateForm(agenda);
        });
      }
      );
    this.formularioAgenda = this.formularioService.createFormAgenda();
   }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['agenda']);
  }

  updateForm(agenda) {
    this.formularioAgenda.patchValue({
      id: agenda.id,
      nome: agenda.nome,
      tipo: agenda.tipo,
      descricao: agenda.descricao,
      data_disponibilizacao: agenda.data_disponibilizacao,
      data_encerramento: agenda.data_encerramento,
    });
  }

  onSave() {
    this.submitted = true;
    this.error = this.agendaService.validarData(this.formularioAgenda.value.data_disponibilizacao, this.formularioAgenda.value.data_encerramento)
    this.route.params.subscribe(
      (params: any) => {
        if (this.formularioAgenda.valid) {
          this.agendaService.edit_agenda(params['id'], this.formularioAgenda.value).subscribe((data: any) => {
            this.formularioAgenda.reset();
            this.return();
          }, (error: any) => {
            this.error = error;
          });
        }
      }
    );
  }

  getter() {
    this.agendaService.get_agendas().subscribe((data: any) => {
      console.log(data);

      this.agendas = data;
    }, (error: any) => {
      this.error = error;
    });
  }

  hasError(field: string) {
    return this.formularioAgenda.get(field).errors;
  }

}

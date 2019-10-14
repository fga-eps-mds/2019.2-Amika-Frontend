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
  error: any;
  formularioAgenda: FormGroup;
  submitted = false;
  agendaComponent: AgendasComponent;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const agenda$ = this.agendaService.get_agenda(id)
        agenda$.subscribe(agenda => {
          this.updateForm(agenda);
        });
      }
      );
    this.formularioAgenda = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
      data_disponibilizacao: ['', Validators.required],
      data_encerramento: ['', Validators.required],
    });
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
    this.route.params.subscribe(
      (params: any) => {
        if (this.formularioAgenda.valid) {
          console.log('Editado');
          console.log(this.formularioAgenda);
          this.agendaService.edit_agenda(params['id'], this.formularioAgenda.value).subscribe((data: any) => {
            console.log(data);
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

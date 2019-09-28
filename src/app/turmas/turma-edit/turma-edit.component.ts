import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Turma } from '../turmas.model';
import { TurmasComponent } from '../turmas.component';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styleUrls: ['./turma-edit.component.css']
})
export class TurmaEditComponent implements OnInit {
  turmas: Turma;
  error: any;
  formularioTurma: FormGroup;
  submitted = false;
  turmaComponent: TurmasComponent;

  constructor(private turmaService: TurmaService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const turma$ = this.turmaService.getById(id)
        turma$.subscribe(turma => {
          this.updateForm(turma);
        });
      }
      );
    this.formularioTurma = this.formBuilder.group({
      id: [null],
      nome_turma: ['', Validators.required],
      periodo_turma: ['', Validators.required],
      ano_turma: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['turmas']);
  }

  updateForm(turma) {
    this.formularioTurma.patchValue({
      id: turma.id,
      nome_turma: turma.nome_turma,
      periodo_turma: turma.periodo_turma,
      ano_turma: turma.ano_turma
    });
  }

}

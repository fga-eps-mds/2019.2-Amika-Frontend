import { Turma } from './turmas.model';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from './turma.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: any;
  error: any;

  constructor(private turmaService: TurmaService) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {
    this.turmaService.get_turmas().subscribe((data: any) => {
      console.log(data);

      this.turmas = data;
    }, (error: any) => {
      this.error = error;
    });
  }

}

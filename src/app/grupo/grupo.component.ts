import { ListaGrupoService } from './lista-grupo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  nome : string;
  alunos: any;
  error: any;

  constructor(private listaGrupoService: ListaGrupoService) {
  this.getter();
}

  ngOnInit() {
  }

  getter() {
    this.listaGrupoService.get_grupo().subscribe((data:any) => {
      this.alunos = data;
      console.log(this.alunos)
    }, (error:any) => {
      this.error = error;
    });
  }

}
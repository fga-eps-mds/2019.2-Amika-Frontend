import { environment } from 'src/environments/environment';
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

  fotoUrl(foto) {
    return environment.urlApi.slice(0, -1) + foto;
  }

  tamanhoFonteNome(first_name: string, last_name: string) {
    let tamanho_nome = (first_name + last_name).length + 1;
    if (tamanho_nome < 23) {
      return '15px';
    } 
    else if (tamanho_nome < 26) {
      return '14px';
    }
    else if (tamanho_nome < 31) {
      return '13px';   
    }
    else {
      return '12px';
    }
  }


}
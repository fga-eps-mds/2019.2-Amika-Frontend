import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './../autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class GraficoHumorService {
  constructor(private autenticacao: AutenticacaoService) {}

    public get_grafico(turma): Observable<any>{
      return this.autenticacao.get(environment.urlApi + 'grafico/'+turma);
    }
  }


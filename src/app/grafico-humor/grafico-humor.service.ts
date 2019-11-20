import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './../autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class GraficoHumorService {
  constructor(private autenticacao: AutenticacaoService) {}

    public get_grafico(turma): Observable<any>{
      return this.autenticacao.get('grafico/'+turma);
    }
  }


import { RequisicoesService } from './../requisicoes.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficoHumorService {
  constructor(private requisicao: RequisicoesService) {}

    public get_grafico(turma): Observable<any>{
      return this.requisicao.get('grafico/'+turma);
    }
  }


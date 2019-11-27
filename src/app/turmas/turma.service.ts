import { RequisicoesService } from './../requisicoes.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TurmaService {
  constructor(private requisicao: RequisicoesService) {}

  public get_turmas(): Observable<any> {
    return this.requisicao.get('turmas/');
  }

  public delete_turmas(id): Observable<any> {
    return this.requisicao.delete('turma/' + id);
  }

  public create_turmas(turma): Observable<any> {
    return this.requisicao.post('turma/', turma);
  }

  public edit_turmas(id, turma): Observable<any> {
    return this.requisicao.put('turma/' + id, turma);
  }

  public getById(id) {
    return this.requisicao.get('turma/' + id);
  }
}

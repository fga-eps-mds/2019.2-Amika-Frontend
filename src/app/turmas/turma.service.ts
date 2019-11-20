import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TurmaService {
  constructor(private autenticacao: AutenticacaoService) {}

  public get_turmas(): Observable<any> {
    return this.autenticacao.get('turmas/');
  }

  public delete_turmas(id): Observable<any>{
    return this.autenticacao.delete('turma/' + id);
  }

  public create_turmas(turma): Observable<any> {
    return this.autenticacao.post('turma/', turma);
  }
  
  public edit_turmas(id, turma): Observable<any> {
    return this.autenticacao.put('turma/' + id, turma);
  }

  public getById(id) {
    return this.autenticacao.get('turma/' + id);
  }
}

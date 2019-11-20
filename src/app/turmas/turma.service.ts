import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TurmaService {
  constructor(private autenticacao: AutenticacaoService) { 
  }

  public get_turmas(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'turmas/');
  }

  public delete_turmas(id): Observable<any>{
    return this.autenticacao.delete(environment.urlApi + 'turma/' + id);
  }

  public create_turmas(turma): Observable<any> {
    return this.autenticacao.post(environment.urlApi + 'turma/', turma);
  }
  
  public edit_turmas(id, turma): Observable<any> {
    return this.autenticacao.put(environment.urlApi + 'turma/' + id, turma);
  }

  public getById(id) {
    return this.autenticacao.get(environment.urlApi + 'turma/' + id);
  }
}

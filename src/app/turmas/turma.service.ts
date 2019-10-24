import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TurmaService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { 
    this.autenticacao.setHeader();
  }

  public get_turmas(): Observable<any> {
    return this.http.get(environment.urlApi + 'turmas/', this.autenticacao.httpOptions);
  }

  public delete_turmas(id): Observable<any>{
    return this.http.delete(environment.urlApi + 'turma/' + id, this.autenticacao.httpOptions);
  }

  public create_turmas(turma): Observable<any> {
    return this.http.post(environment.urlApi + 'turma/', turma, this.autenticacao.httpOptions);
  }

  public edit_turmas(id, turma): Observable<any> {
    return this.http.put(environment.urlApi + 'turma/' + id, turma, this.autenticacao.httpOptions);
  }

  public getById(id) {
    return this.http.get(environment.urlApi + 'turma/' + id, this.autenticacao.httpOptions);
  }
}

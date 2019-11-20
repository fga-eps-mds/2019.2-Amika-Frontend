import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './../autenticacao.service';

@Injectable({
  providedIn: 'root'
})

export class GrupoService {

  constructor(private autenticacao: AutenticacaoService) {}

  public get_grupos(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'grupos/');
  }

  public delete_grupos(id): Observable<any> {
    return this.autenticacao.delete(environment.urlApi + 'grupo/' + id + '/');
  }

  public create_grupos(grupo): Observable<any> {
    return this.autenticacao.post(environment.urlApi + 'grupo/', grupo);
  }

  public edit_grupos(id, grupo): Observable<any> {
    return this.autenticacao.put(environment.urlApi + 'grupo/' + id + '/', grupo);
  }

  public getById(id) {
    return this.autenticacao.get(environment.urlApi + 'grupo/' + id + '/');
  }

  public get_alunos(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'alunos/');
  }

  public popula_grupo(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'popula-grupo/');
  }

}

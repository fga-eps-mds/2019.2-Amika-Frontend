import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './../autenticacao.service';

@Injectable({
  providedIn: 'root'
})

export class GrupoService {

  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {
    this.autenticacao.setHeader();
   }

  public get_grupos(): Observable<any> {
    return this.http.get(environment.urlApi + 'grupos/', this.autenticacao.httpOptions);
  }

  public delete_grupos(id): Observable<any> {
    return this.http.delete(environment.urlApi + 'grupo/' + id + '/', this.autenticacao.httpOptions);
  }

  public create_grupos(grupo): Observable<any> {
    return this.http.post(environment.urlApi + 'grupo/', grupo, this.autenticacao.httpOptions);
  }

  public edit_grupos(id, grupo): Observable<any> {
    return this.http.put(environment.urlApi + 'grupo/' + id + '/', grupo, this.autenticacao.httpOptions);
  }

  public getById(id) {
    return this.http.get(environment.urlApi + 'grupo/' + id + '/', this.autenticacao.httpOptions);
  }

  public get_alunos(): Observable<any> {
    return this.http.get(environment.urlApi + 'alunos/', this.autenticacao.httpOptions);
  }

  public popula_grupo(): Observable<any> {
    return this.http.get(environment.urlApi + 'popula-grupo/', this.autenticacao.httpOptions);
  }

}

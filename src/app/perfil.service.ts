import { AutenticacaoService } from './autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  constructor(
    private http: HttpClient,
    private autenticacao: AutenticacaoService,
  ) {
    this.autenticacao.setHeader();
  }

  public perfilAluno(id): Observable<any> {
    return this.http.get(`${environment.urlApi}aluno/${id}/`, this.autenticacao.httpOptions);
  }

  public trocaFoto(id, formData): Observable<any> {
    return this.http.put(`${environment.urlApi}aluno/${id}/`, formData, {
      headers: new HttpHeaders({'Authorization': `${localStorage.getItem('Authorization')}`})
    });
  }
}

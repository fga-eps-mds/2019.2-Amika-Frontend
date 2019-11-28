import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from '../autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AgendasRealizadasService {
  constructor(
    private http: HttpClient,
    private autenticacao: AutenticacaoService
  ) {
    this.autenticacao.setHeader();
  }

  public adicionaAgendaRealizada(formData: FormData): Observable<any> {
    return this.http.post(`${environment.urlApi}agenda-realizada/`, formData, {
      headers: new HttpHeaders({Authorization: `${localStorage.getItem('Authorization')}`})
    });
  }

  public editaAgendaRealizada(agendaRealizadaId: string, formData: FormData): Observable<any> {
    return this.http.put(`${environment.urlApi}agenda-realizada/${agendaRealizadaId}`, formData, {
      headers: new HttpHeaders({Authorization: `${localStorage.getItem('Authorization')}`})
    });
  }

  public deletaAgendaRealizada(agendaRealizadaId: string): Observable<any> {
    return this.http.delete(`${environment.urlApi}agenda-realizada/${agendaRealizadaId}`, this.autenticacao.httpOptions);
  }

  public agendasRealizadasAluno(userId: string): Observable<any> {
    return this.http.get(`${environment.urlApi}agendas-realizadas-aluno/${userId}`, this.autenticacao.httpOptions);
  }

  public agendasNaoRealizadasAluno(userId: string): Observable<any> {
    return this.http.get(`${environment.urlApi}agendas-nao-realizadas-aluno/${userId}`, this.autenticacao.httpOptions);
  }
}

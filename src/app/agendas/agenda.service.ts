import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor(private autenticacao: AutenticacaoService) {}

  public get_agendas(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'agendas/');
  }

  public delete_agenda(id): Observable<any> {
    return this.autenticacao.delete(environment.urlApi + 'agenda/' + id);
  }

  public create_agenda(agenda): Observable<any> {
    return this.autenticacao.post(environment.urlApi + 'agenda/', agenda);
  }

  public edit_agenda(id, agenda): Observable<any> {
    return this.autenticacao.put(environment.urlApi + 'agenda/' + id, agenda);
  }

  public get_agenda(id) {
    return this.autenticacao.get(environment.urlApi + 'agenda/' + id);
  }
}

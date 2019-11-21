import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor(private autenticacao: AutenticacaoService) {}

  public get_agendas(): Observable<any> {
    return this.autenticacao.get('agendas/');
  }

  public delete_agenda(id): Observable<any> {
    return this.autenticacao.delete('agenda/' + id);
  }

  public create_agenda(agenda): Observable<any> {
    return this.autenticacao.post('agenda/', agenda);
  }

  public edit_agenda(id, agenda): Observable<any> {
    return this.autenticacao.put('agenda/' + id, agenda);
  }

  public get_agenda(id) {
    return this.autenticacao.get('agenda/' + id);
  }

  public validarData(data_disponibilizacao, data_encerramento){
    if (new Date(data_disponibilizacao) >= new Date(data_encerramento)){
      return {isError:true,errorMessage:"Data de encerramento deve ser maior do que a de disponibilização"};
    } 
    else {
      return {isError:false,errorMessage:''};
    }
  }

}

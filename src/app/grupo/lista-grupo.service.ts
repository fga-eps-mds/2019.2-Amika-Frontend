import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticacaoService } from './../autenticacao.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaGrupoService {

  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { 
    this.autenticacao.setHeader();
  }

  public get_grupo(): Observable<any> {
    return this.http.get(environment.urlApi + 'alunos_grupo/', this.autenticacao.httpOptions);
  }
}''

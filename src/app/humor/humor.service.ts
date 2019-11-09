import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { 
    this.autenticacao.setHeader();
  }

  public create_humor(humor): Observable<any> {
    return this.http.post(environment.urlApi + 'humor/', humor, this.autenticacao.httpOptions);
  }

  public get_humor(): Observable<any> {
    return this.http.get(environment.urlApi + 'humors/', this.autenticacao.httpOptions);
  }
}

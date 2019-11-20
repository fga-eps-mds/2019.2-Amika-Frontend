import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  constructor(private autenticacao: AutenticacaoService) {
  }

  public create_humor(humor): Observable<any> {
    return this.autenticacao.post(environment.urlApi + 'humor/', humor);
  }

  public get_humor(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'humors/');
  }

  public get_status(): Observable<any> {
    return this.autenticacao.get(environment.urlApi + 'humor_status/')
  }
}

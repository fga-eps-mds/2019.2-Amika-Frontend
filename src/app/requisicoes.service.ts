import { AutenticacaoService } from './autenticacao.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RequisicoesService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {
    this.autenticacao.setHeader();
  }

  get(caminho) {
    return this.http.get(environment.urlApi + caminho, this.autenticacao.httpOptions);
  }

  delete(caminho) {
    return this.http.delete(environment.urlApi + caminho, this.autenticacao.httpOptions);
  }

  post(caminho, data) {
    return this.http.post(environment.urlApi + caminho, data, this.autenticacao.httpOptions);
  }

  put(caminho, data) {
    return this.http.put(environment.urlApi + caminho, data, this.autenticacao.httpOptions);
  }
}

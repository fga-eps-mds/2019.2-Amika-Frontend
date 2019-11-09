import { Injectable } from '@angular/core';
import { AutenticacaoService } from './../autenticacao.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PerfilUsuarioService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {
    this.autenticacao.setHeader();
   }

   public get_usuario(id): Observable<any> {
    return this.http.get(environment.urlApi + 'aluno/' + id + '/', this.autenticacao.httpOptions);
  }

}

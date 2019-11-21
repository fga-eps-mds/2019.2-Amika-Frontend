import { Injectable } from '@angular/core';
import { AutenticacaoService } from './../autenticacao.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PerfilUsuarioService {
  constructor(private autenticacao: AutenticacaoService) {}
   public get_usuario(id): Observable<any> {
    return this.autenticacao.get('aluno/' + id + '/');
  }
}

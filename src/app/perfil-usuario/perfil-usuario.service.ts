import { RequisicoesService } from './../requisicoes.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PerfilUsuarioService {
  constructor(private requisicao: RequisicoesService) {}
   public get_usuario(id): Observable<any> {
    return this.requisicao.get('aluno/' + id + '/');
  }
}

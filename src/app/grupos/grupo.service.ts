import { RequisicoesService } from './../requisicoes.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GrupoService {

  constructor(private requisicao: RequisicoesService) {}

  public get_grupos(): Observable<any> {
    return this.requisicao.get('grupos/');
  }

  public delete_grupos(id): Observable<any> {
    return this.requisicao.delete('grupo/' + id + '/');
  }

  public create_grupos(grupo): Observable<any> {
    return this.requisicao.post('grupo/', grupo);
  }

  public edit_grupos(id, grupo): Observable<any> {
    return this.requisicao.put('grupo/' + id + '/', grupo);
  }

  public getById(id) {
    return this.requisicao.get('grupo/' + id + '/');
  }

  public get_alunos(): Observable<any> {
    return this.requisicao.get('alunos/');
  }

  public popula_grupo(): Observable<any> {
    return this.requisicao.get('popula-grupo/');
  }
}

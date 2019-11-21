import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './../autenticacao.service';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class GrupoService {

  constructor(private formBuilder: FormBuilder, private autenticacao: AutenticacaoService) {}

  public get_grupos(): Observable<any> {
    return this.autenticacao.get('grupos/');
  }

  public delete_grupos(id): Observable<any> {
    return this.autenticacao.delete('grupo/' + id + '/');
  }

  public create_grupos(grupo): Observable<any> {
    return this.autenticacao.post('grupo/', grupo);
  }

  public edit_grupos(id, grupo): Observable<any> {
    return this.autenticacao.put('grupo/' + id + '/', grupo);
  }

  public getById(id) {
    return this.autenticacao.get('grupo/' + id + '/');
  }

  public get_alunos(): Observable<any> {
    return this.autenticacao.get('alunos/');
  }

  public popula_grupo(): Observable<any> {
    return this.autenticacao.get('popula-grupo/');
  }

  public createFormGrupo() {
    return this.formBuilder.group({
      nome: ['', Validators.required],
      id: ""
    });
  }

}

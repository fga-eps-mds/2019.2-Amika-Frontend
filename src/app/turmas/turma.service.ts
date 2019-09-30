import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  constructor(private http: HttpClient) { }

  public get_turmas(): Observable<any> {
    return this.http.get('http://0.0.0.0:8000/turmas/');
  }

  public delete_turmas(id): Observable<any>{
    return this.http.delete('http://0.0.0.0:8000/turma_delete/'+id, id);
  }

  public create_turmas(turma): Observable<any> {
    return this.http.post('http://0.0.0.0:8000/turmas_create', turma);
  }

  public edit_turmas(id, turma): Observable<any> {
    return this.http.put('http://0.0.0.0:8000/turma_edit/'+id, turma);
  }

  public getById(id) {
    return this.http.get('http://0.0.0.0:8000/turma/'+id, id);
  }
}

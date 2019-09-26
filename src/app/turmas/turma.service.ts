import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from './turmas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  constructor(private http: HttpClient) { }

  public get_turmas(): Observable<any> {
    return this.http.get('http://0.0.0.0:8000/turmas');
  }
}


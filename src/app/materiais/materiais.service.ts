import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MateriaisService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {
    this.autenticacao.setHeader();
  }

  public get_materiais(): Observable<any> {
    return this.http.get(environment.urlApi + 'material/', this.autenticacao.httpOptions);
  }

  public delete_materiais(id): Observable<any>{
    return this.http.delete(environment.urlApi + 'material/' + id, this.autenticacao.httpOptions);
  }

  public create_materiais(formData): Observable<any> {
    return this.http.post(environment.urlApi + 'material/', formData, {
      headers: new HttpHeaders({'Authorization': `${localStorage.getItem('Authorization')}`})
    });
  }

  public edit_materiais(id, material): Observable<any> {
    return this.http.put(environment.urlApi + 'material/' + id, material, this.autenticacao.httpOptions);
  }

  public getById(id) {
    return this.http.get(environment.urlApi + 'material/' + id, this.autenticacao.httpOptions);
  }
}

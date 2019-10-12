import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GrupoService {

  constructor(private http: HttpClient) { }

  public get_grupos(): Observable<any> {
    return this.http.get(environment.urlApi + 'grupo/')
  }

  public delete_grupos(id): Observable<any> {
    return this.http.delete(environment.urlApi + 'grupo/' + id, id);
  }

  public create_grupos(grupo): Observable<any> {
    return this.http.post(environment.urlApi + 'grupos/', grupo)
  }

  public edit_grupos(id, grupo): Observable<any> {
    return this.http.put(environment.urlApi + 'grupo/' + id, grupo)
  }

  public getById(id) {
    return this.http.get(environment.urlApi + 'grupo/' + id, id);
  }


}

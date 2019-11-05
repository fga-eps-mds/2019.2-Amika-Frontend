import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficoHumorService {
  constructor(private http: HttpClient) { 

  {
    public get_grafico(turma): Observable<any>{
      return this.http.get(environment.urlApi + 'grafico/', turma);
    }
  }
} 

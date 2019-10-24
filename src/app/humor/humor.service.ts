import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  constructor(private http: HttpClient) { }

  public create_humor(humor): Observable<any> {
    return this.http.post(environment.urlApi + 'humor/', humor);
  }

}

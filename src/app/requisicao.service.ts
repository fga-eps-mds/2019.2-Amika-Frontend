import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  errors;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  realizarRequisicao(dadosAluno) {
    return this.http.post("http://localhost:8000/", dadosAluno, this.httpOptions)
                    .subscribe(data => {
                      console.log(data);
                      this.errors = null;
                    },
                    error => {
                      console.log(error);
                      this.errors = error;

                    });
  }

}

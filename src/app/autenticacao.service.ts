import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  errors;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  constructor(private http: HttpClient) { }

  autenticar(dadosUsuario) { 
    return this.http.post("http://localhost:3000/login/", dadosUsuario, this.httpOptions)
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
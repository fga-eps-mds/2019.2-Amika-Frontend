import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  errors;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  autenticar(dadosUsuario) {
    return this.http.post(environment.urlApi + 'login/', dadosUsuario, this.httpOptions)
                    .subscribe(data => {
                      console.log(data);
                      localStorage.setItem('Authorization', 'JWT ' + data['token']);
                      this.informacoesUsuario();
                      this.setHeader();
                      this.errors = null;
                      this.router.navigateByUrl('/');
                    },
                    error => {
                      console.log(error);
                      this.errors = error;

                    });
  }

  setHeader() {
    let token = localStorage.getItem('Authorization');
    if(token) {
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }

  informacoesUsuario():any {
    try{
      const jwt_params = jwt_decode(localStorage.getItem('Authorization'));
      localStorage.setItem('matricula', jwt_params['username']);
      localStorage.setItem('user_id', jwt_params['user_id']);
    }
    catch(Error){
      return null;
    }
  }

  deslogar() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('matricula');
    localStorage.removeItem('user_id');
  }
}
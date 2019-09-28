import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  errors;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http: HttpClient, private router:Router) { }

  autenticar(dadosUsuario) { 
    return this.http.post(environment.urlApi + '/login/', dadosUsuario, this.httpOptions)
                    .subscribe(data => {
                      console.log(data);
                      localStorage.setItem('Authorization', 'JWT ' + data['token']);
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

  deslogar() {
    // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', null);
    localStorage.removeItem('Authorization');
  }
}
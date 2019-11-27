import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormularioFelidadeAutenticaService {

  errors;
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json'
      })
  };

    constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { }

    enviar(dados) {
        return this.http.put(environment.urlApi + "aluno/" + localStorage.getItem('user_id') + "/", dados, this.autenticacao.httpOptions)
                .subscribe(data => {
                  console.log(data);

              },
              error => {
                  console.log(error);
                  this.errors = error;
              });
            }

    public verificaForm() {
      return this.http.get(environment.urlApi + "aluno/" + localStorage.getItem('user_id') + "/", this.autenticacao.httpOptions);
    }
}

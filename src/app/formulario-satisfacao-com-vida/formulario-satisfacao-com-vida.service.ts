import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormularioSatisfacaoComVidaService {
    errors;

    constructor(private http: HttpClient, private router: Router, private autenticacao: AutenticacaoService) { }

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

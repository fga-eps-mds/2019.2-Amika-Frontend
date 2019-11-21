import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FormularioSatisfacaoComVidaService {

    errors;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    constructor(private http: HttpClient, private router: Router, private autenticacao: AutenticacaoService) { }

    enviar(dados) {
        return this.http.put("http://localhost:8000/aluno/" + localStorage.getItem('user_id') + "/", dados, this.autenticacao.httpOptions)
                .subscribe(data => {
                    console.log(data);

                },
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacaoService } from './autenticacao.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ListaService {

    errors;

    constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {
      this.autenticacao.setHeader();
     }

    enviar(dados) {
        return this.http.post(environment.urlApi + 'registro/', dados, this.autenticacao.httpOptions)
                .subscribe(data => {
                    console.log(data);

                },
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}


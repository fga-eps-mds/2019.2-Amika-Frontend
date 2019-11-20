import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacaoService } from './autenticacao.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ListaService {

    errors;

    constructor(private autenticacao: AutenticacaoService) {}

    enviar(dados) {
        return this.autenticacao.post(environment.urlApi + 'registro/', dados)
                .subscribe(data => {
                    console.log(data);

                },
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}


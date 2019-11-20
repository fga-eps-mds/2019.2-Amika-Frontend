import { Injectable } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
    providedIn: 'root'
})

export class ListaService {

    errors;

    constructor(private autenticacao: AutenticacaoService) {}

    enviar(dados) {
        return this.autenticacao.post('registro/', dados)
                .subscribe(data => {
                    console.log(data);

                },
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}


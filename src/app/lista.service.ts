import { RequisicoesService } from './requisicoes.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ListaService {

    errors;

    constructor(private requisicao: RequisicoesService) {}

    enviar(dados) {
        return this.requisicao.post('registro/', dados)
                .subscribe(data => {
                    console.log(data);

                },
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}


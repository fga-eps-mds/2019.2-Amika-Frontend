import { RequisicoesService } from './requisicoes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  errors;

  constructor(private requisicao: RequisicoesService) {}

  realizarRequisicao(dadosAluno) {
    return this.requisicao.post('aluno/', dadosAluno)
                    .subscribe(data => {
                      console.log(data);
                      this.errors = null;
                    },
                    error => {
                      console.log(error);
                      this.errors = error;

                    });
  }

  requisicaoMatriculaIndividual(dadosIndividuais) {
    return this.requisicao.post('registro/', dadosIndividuais)
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

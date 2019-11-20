import { Injectable } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  errors;

  constructor(private autenticacao: AutenticacaoService) {}

  realizarRequisicao(dadosAluno) {
    return this.autenticacao.post('aluno/', dadosAluno)
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
    return this.autenticacao.post('registro/', dadosIndividuais)
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  errors;

  constructor(private autenticacao: AutenticacaoService) {}

  realizarRequisicao(dadosAluno) {
    return this.autenticacao.post(environment.urlApi + 'aluno/', dadosAluno)
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
    return this.autenticacao.post(environment.urlApi + 'registro/', dadosIndividuais)
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

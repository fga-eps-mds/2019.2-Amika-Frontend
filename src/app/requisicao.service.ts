import { RequisicoesService } from './requisicoes.service';
import { Injectable } from '@angular/core';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  errors;

  constructor(private requisicao: RequisicoesService, public alertaService:AlertaService) {}

  realizarRequisicao(dadosAluno) {
    return this.requisicao.post('aluno/', dadosAluno)
                    .subscribe(data => {
                      console.log(data);
                      this.errors = null;
                      this.alertaService.alerta('Seu cadastro foi feito com sucesso!', 'success', false);
                    },
                    error => {
                      console.log(error);
                      this.errors = error;
                      this.alertaService.alerta('Sua matricula ainda não foi cadastrada, solicite ao professor para que realize o cadastro de sua matricula anteriormente. ', 'error', false);
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

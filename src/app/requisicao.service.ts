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

  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  realizarRequisicao(dadosAluno) {
    return this.http.post(environment.urlApi + 'aluno/', dadosAluno, this.autenticacao.httpOptions)
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
    return this.http.post(environment.urlApi + 'registro/', dadosIndividuais, this.autenticacao.httpOptions)
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
